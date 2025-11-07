import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const url = new URL(req.url);
    const searchTerm = url.searchParams.get('term');
    const language = url.searchParams.get('language') || 'english';
    const limit = parseInt(url.searchParams.get('limit') || '10');

    if (!searchTerm) {
      return new Response(
        JSON.stringify({ error: 'Search term is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    let query = supabase
      .from('dictionary_entries')
      .select(`
        *,
        examples:dictionary_examples(*),
        sources:dictionary_sources(*)
      `)
      .eq('verified', true)
      .limit(limit);

    if (language === 'english') {
      query = query.or(`english.ilike.%${searchTerm}%,definition.ilike.%${searchTerm}%`);
    } else {
      query = query.ilike('marathi', `%${searchTerm}%`);
    }

    const { data: entries, error } = await query;

    if (error) {
      throw error;
    }

    const suggestions = await supabase
      .from('dictionary_entries')
      .select('english, marathi')
      .eq('verified', true)
      .limit(5);

    let suggestionQuery;
    if (language === 'english') {
      suggestionQuery = suggestions.ilike('english', `${searchTerm}%`);
    } else {
      suggestionQuery = suggestions.ilike('marathi', `${searchTerm}%`);
    }

    const { data: suggestionData } = await suggestionQuery;
    const suggestionList = suggestionData?.map(item => 
      language === 'english' ? item.english : item.marathi
    ) || [];

    if (req.method === 'POST') {
      const authHeader = req.headers.get('Authorization');
      if (authHeader) {
        await supabase.from('search_history').insert({
          search_term: searchTerm,
          language: language,
        });
      }
    }

    return new Response(
      JSON.stringify({
        entries: entries || [],
        suggestions: suggestionList,
        totalResults: entries?.length || 0,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});