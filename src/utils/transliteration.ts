// English to Marathi transliteration utility

interface TransliterationMap {
  [key: string]: string;
}

// Basic English to Devanagari transliteration mapping
const transliterationMap: TransliterationMap = {
  // Vowels
  'a': 'अ',
  'aa': 'आ',
  'i': 'इ',
  'ii': 'ई',
  'u': 'उ',
  'uu': 'ऊ',
  'e': 'ए',
  'ai': 'ऐ',
  'o': 'ओ',
  'au': 'औ',
  
  // Consonants
  'ka': 'क',
  'kha': 'ख',
  'ga': 'ग',
  'gha': 'घ',
  'nga': 'ङ',
  'cha': 'च',
  'chha': 'छ',
  'ja': 'ज',
  'jha': 'झ',
  'nya': 'ञ',
  'ta': 'ट',
  'tha': 'ठ',
  'da': 'ड',
  'dha': 'ढ',
  'na': 'ण',
  'ta': 'त',
  'tha': 'थ',
  'da': 'द',
  'dha': 'ध',
  'na': 'न',
  'pa': 'प',
  'pha': 'फ',
  'ba': 'ब',
  'bha': 'भ',
  'ma': 'म',
  'ya': 'य',
  'ra': 'र',
  'la': 'ल',
  'va': 'व',
  'sha': 'श',
  'shha': 'ष',
  'sa': 'स',
  'ha': 'ह',
  
  // Numbers
  '0': '०',
  '1': '१',
  '2': '२',
  '3': '३',
  '4': '४',
  '5': '५',
  '6': '६',
  '7': '७',
  '8': '८',
  '9': '९',
  
  // Common words
  'namaste': 'नमस्ते',
  'dhanyawad': 'धन्यवाद',
  'kshama': 'क्षमा',
  'prem': 'प्रेम',
  'shanti': 'शांति',
  'ghar': 'घर',
  'paani': 'पाणी',
  'kaam': 'काम',
  'vyakti': 'व्यक्ती',
  'samaj': 'समाज',
  'desh': 'देश',
  'bhasha': 'भाषा',
  'vidya': 'विद्या',
  'gyaan': 'ज्ञान',
  'sanskruti': 'संस्कृती',
  'parampara': 'परंपरा'
};

// Common Marathi word patterns
const commonPatterns: TransliterationMap = {
  'abandon': 'सोडून देणे',
  'court': 'न्यायालय',
  'justice': 'न्याय',
  'law': 'कायदा',
  'legal': 'कायदेशीर',
  'government': 'सरकार',
  'ministry': 'मंत्रालय',
  'procedure': 'प्रक्रिया',
  'document': 'दस्तऐवज',
  'evidence': 'पुरावा',
  'witness': 'साक्षीदार',
  'judge': 'न्यायाधीश',
  'lawyer': 'वकील',
  'case': 'खटला',
  'hearing': 'सुनावणी',
  'verdict': 'निकाल',
  'appeal': 'अपील',
  'petition': 'याचिका',
  'order': 'आदेश',
  'notice': 'नोटीस'
};

export function transliterateToMarathi(input: string): string {
  if (!input || input.trim() === '') return '';
  
  const lowerInput = input.toLowerCase().trim();
  
  // Check for exact matches in common patterns first
  if (commonPatterns[lowerInput]) {
    return commonPatterns[lowerInput];
  }
  
  // Check for exact matches in transliteration map
  if (transliterationMap[lowerInput]) {
    return transliterationMap[lowerInput];
  }
  
  // For longer words, try to find partial matches
  let result = '';
  let i = 0;
  
  while (i < lowerInput.length) {
    let matched = false;
    
    // Try to match longer patterns first (3 chars, then 2, then 1)
    for (let len = Math.min(4, lowerInput.length - i); len >= 1; len--) {
      const substr = lowerInput.substr(i, len);
      if (transliterationMap[substr]) {
        result += transliterationMap[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    // If no match found, keep the original character
    if (!matched) {
      result += lowerInput[i];
      i++;
    }
  }
  
  return result || input; // Return original if no transliteration possible
}

// Function to get transliteration suggestions
export function getTransliterationSuggestions(input: string): string[] {
  const lowerInput = input.toLowerCase();
  const suggestions: string[] = [];
  
  // Find words that start with the input
  Object.keys(commonPatterns).forEach(key => {
    if (key.startsWith(lowerInput) && key !== lowerInput) {
      suggestions.push(commonPatterns[key]);
    }
  });
  
  // Find transliteration matches
  Object.keys(transliterationMap).forEach(key => {
    if (key.startsWith(lowerInput) && key !== lowerInput) {
      suggestions.push(transliterationMap[key]);
    }
  });
  
  return suggestions.slice(0, 5); // Return top 5 suggestions
}