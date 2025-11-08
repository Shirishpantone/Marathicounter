const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const GEMINI_API_KEY = 'AIzaSyANzEa1fccPWmW_JxTbaNLI3186NHfhydY';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent';

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

    console.log('Received request:', { word, language });

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
      prompt = `Translate the following English word or phrase to Marathi and provide a comprehensive dictionary entry in JSON format:

Word/Phrase: "${word}"

Provide the response in this exact JSON format:
{
  "english": "${word}",
  "marathi": "Marathi translation in Devanagari script",
  "hindi": "Hindi translation in Devanagari script",
  "part_of_speech": "noun/verb/adjective/adverb/phrase/etc",
  "pronunciation": "Romanized pronunciation",
  "definition": "Clear English definition",
  "examples": [
    {
      "english_sentence": "Example sentence in English",
      "marathi_sentence": "Example sentence in Marathi (Devanagari)",
      "source": "General usage"
    }
  ]
}

IMPORTANT:
- Provide accurate translations in Devanagari script
- Include 2-3 example sentences
- Make sure the JSON is valid and complete
- Return ONLY the JSON, no additional text`;
    } else {
      prompt = `Translate the following Marathi word or phrase to English and provide a comprehensive dictionary entry in JSON format:

Word/Phrase: "${word}"

Provide the response in this exact JSON format:
{
  "english": "English translation",
  "marathi": "${word}",
  "hindi": "Hindi translation in Devanagari script",
  "part_of_speech": "noun/verb/adjective/adverb/phrase/etc",
  "pronunciation": "Romanized pronunciation",
  "definition": "Clear English definition",
  "examples": [
    {
      "english_sentence": "Example sentence in English",
      "marathi_sentence": "Example sentence in Marathi (Devanagari)",
      "source": "General usage"
    }
  ]
}

IMPORTANT:
- Provide accurate translations
- Include 2-3 example sentences
- Make sure the JSON is valid and complete
- Return ONLY the JSON, no additional text`;
    }

    console.log('Calling Gemini API...');

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
      return new Response(
        JSON.stringify({ 
          error: `Gemini API error: ${geminiResponse.status}`,
          details: errorText
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const geminiData = await geminiResponse.json();
    console.log('Gemini response received:', JSON.stringify(geminiData));

    if (!geminiData.candidates || geminiData.candidates.length === 0) {
      console.error('No candidates in response');
      return new Response(
        JSON.stringify({
          error: 'No response from Gemini API',
          fullResponse: geminiData
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const responseText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      console.error('Could not extract text from response');
      return new Response(
        JSON.stringify({
          error: 'Invalid response structure',
          fullResponse: geminiData
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
    console.log('Response text:', responseText);
    
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Could not extract JSON from response');
      return new Response(
        JSON.stringify({ 
          error: 'Could not extract JSON from response',
          rawResponse: responseText
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const dictionaryEntry = JSON.parse(jsonMatch[0]);
    console.log('Successfully parsed dictionary entry');

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