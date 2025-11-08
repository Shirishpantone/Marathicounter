const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const GEMINI_API_KEY = 'AIzaSyANzEa1fccPWmW_JxTbaNLI3186NHfhydY';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

interface GeminiRequest {
  word: string;
  language: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(req.url);
    const word = url.searchParams.get('word');
    const language = url.searchParams.get('language') || 'english';

    if (!word) {
      return new Response(
        JSON.stringify({ error: 'Word parameter is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    let prompt = '';
    if (language === 'english') {
      prompt = `Provide a comprehensive dictionary entry for the English word "${word}" with the following information in JSON format:
{
  "english": "${word}",
  "marathi": "Marathi translation",
  "hindi": "Hindi translation",
  "part_of_speech": "noun/verb/adjective/adverb/etc",
  "pronunciation": "Romanized pronunciation",
  "definition": "Clear English definition",
  "examples": [
    {
      "english_sentence": "Example sentence in English",
      "marathi_sentence": "Example sentence in Marathi",
      "source": "General usage"
    }
  ]
}

Provide accurate translations in Devanagari script for both Marathi and Hindi. Include 2-3 example sentences showing usage. Make sure the JSON is valid and properly formatted.`;
    } else {
      prompt = `Provide a comprehensive dictionary entry for the Marathi word "${word}" with the following information in JSON format:
{
  "english": "English translation",
  "marathi": "${word}",
  "hindi": "Hindi translation",
  "part_of_speech": "noun/verb/adjective/adverb/etc",
  "pronunciation": "Romanized pronunciation",
  "definition": "Clear English definition",
  "examples": [
    {
      "english_sentence": "Example sentence in English",
      "marathi_sentence": "Example sentence in Marathi",
      "source": "General usage"
    }
  ]
}

Provide accurate translations. Include 2-3 example sentences showing usage. Make sure the JSON is valid and properly formatted.`;
    }

    const geminiResponse = await fetch(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const geminiData = await geminiResponse.json();
    
    if (!geminiData.candidates || geminiData.candidates.length === 0) {
      throw new Error('No response from Gemini API');
    }

    const responseText = geminiData.candidates[0].content.parts[0].text;
    
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not extract JSON from response');
    }

    const dictionaryEntry = JSON.parse(jsonMatch[0]);

    return new Response(
      JSON.stringify({
        entry: dictionaryEntry,
        source: 'gemini',
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to fetch translation',
        details: error.toString()
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});