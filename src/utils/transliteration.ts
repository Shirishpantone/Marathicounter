// English to Marathi transliteration utility with proper phonetic mapping

interface TransliterationMap {
  [key: string]: string;
}

// Vowel matras (vowel signs that combine with consonants)
const vowelMatras: TransliterationMap = {
  'a': '',
  'aa': 'ा',
  'A': 'ा',
  'i': 'ि',
  'ee': 'ी',
  'I': 'ी',
  'u': 'ु',
  'oo': 'ू',
  'U': 'ू',
  'e': 'े',
  'ai': 'ै',
  'o': 'ो',
  'au': 'ौ',
  'O': 'ो'
};

// Standalone vowels
const vowels: TransliterationMap = {
  'a': 'अ',
  'aa': 'आ',
  'A': 'आ',
  'i': 'इ',
  'ee': 'ई',
  'I': 'ई',
  'u': 'उ',
  'oo': 'ऊ',
  'U': 'ऊ',
  'e': 'ए',
  'ai': 'ऐ',
  'o': 'ओ',
  'au': 'औ',
  'O': 'ओ'
};

// Consonants with inherent 'a' sound
const consonants: TransliterationMap = {
  'k': 'क',
  'kh': 'ख',
  'g': 'ग',
  'gh': 'घ',
  'ch': 'च',
  'chh': 'छ',
  'j': 'ज',
  'jh': 'झ',
  'T': 'ट',
  'Th': 'ठ',
  'D': 'ड',
  'Dh': 'ढ',
  't': 'त',
  'th': 'थ',
  'd': 'द',
  'dh': 'ध',
  'n': 'न',
  'p': 'प',
  'ph': 'फ',
  'f': 'फ',
  'b': 'ब',
  'bh': 'भ',
  'm': 'म',
  'y': 'य',
  'r': 'र',
  'l': 'ल',
  'v': 'व',
  'w': 'व',
  'sh': 'श',
  's': 'स',
  'h': 'ह',
  'z': 'झ',
  'x': 'क्ष',
  'q': 'क',
  'c': 'क'
};

// Common English to Marathi word mappings
const commonWords: TransliterationMap = {
  'are': 'आहे',
  'you': 'तू',
  'ok': 'ठीक',
  'okay': 'ठीक',
  'yes': 'हो',
  'no': 'नाही',
  'hello': 'नमस्कार',
  'hi': 'नमस्कार',
  'bye': 'निरोप',
  'good': 'चांगले',
  'bad': 'वाईट',
  'thank': 'धन्यवाद',
  'thanks': 'धन्यवाद',
  'sorry': 'माफ करा',
  'please': 'कृपया',
  'how': 'कसे',
  'what': 'काय',
  'where': 'कुठे',
  'when': 'केव्हा',
  'why': 'का',
  'who': 'कोण',
  'water': 'पाणी',
  'food': 'अन्न',
  'home': 'घर',
  'house': 'घर',
  'love': 'प्रेम',
  'friend': 'मित्र',
  'family': 'कुटुंब',
  'mother': 'आई',
  'father': 'वडील',
  'brother': 'भाऊ',
  'sister': 'बहीण',
  'day': 'दिवस',
  'night': 'रात्र',
  'morning': 'सकाळ',
  'evening': 'संध्याकाळ',
  'today': 'आज',
  'tomorrow': 'उद्या',
  'yesterday': 'काल',
  'time': 'वेळ',
  'money': 'पैसा',
  'work': 'काम',
  'school': 'शाळा',
  'book': 'पुस्तक',
  'pen': 'पेन',
  'happy': 'आनंदी',
  'sad': 'दुःखी'
};

function isVowel(char: string): boolean {
  return 'aeiouAEIOU'.includes(char);
}

export function transliterateToMarathi(input: string): string {
  if (!input || input.trim() === '') return '';

  const lowerInput = input.toLowerCase().trim();

  // Check for common word matches first
  if (commonWords[lowerInput]) {
    return commonWords[lowerInput];
  }

  // For phonetic transliteration
  let result = '';
  let i = 0;

  while (i < lowerInput.length) {
    let matched = false;
    let char = lowerInput[i];

    // Skip spaces and special characters
    if (char === ' ') {
      result += ' ';
      i++;
      continue;
    }

    if (!/[a-z]/i.test(char)) {
      result += char;
      i++;
      continue;
    }

    // Try to match multi-character consonants first
    const twoChar = lowerInput.substr(i, 2);
    const threeChar = lowerInput.substr(i, 3);

    // Check for three-character consonants
    if (consonants[threeChar]) {
      result += consonants[threeChar];

      // Check if followed by a vowel
      if (i + 3 < lowerInput.length && isVowel(lowerInput[i + 3])) {
        const vowelChar = lowerInput[i + 3];
        if (vowelMatras[vowelChar]) {
          result += vowelMatras[vowelChar];
          i += 4;
          matched = true;
        }
      }

      if (!matched) {
        i += 3;
      }
      matched = true;
    }
    // Check for two-character consonants
    else if (consonants[twoChar]) {
      result += consonants[twoChar];

      // Check if followed by a vowel
      if (i + 2 < lowerInput.length && isVowel(lowerInput[i + 2])) {
        const vowelChar = lowerInput[i + 2];
        if (vowelMatras[vowelChar]) {
          result += vowelMatras[vowelChar];
          i += 3;
          matched = true;
        }
      }

      if (!matched) {
        i += 2;
      }
      matched = true;
    }
    // Check for single consonants
    else if (consonants[char]) {
      result += consonants[char];

      // Check if followed by a vowel
      if (i + 1 < lowerInput.length && isVowel(lowerInput[i + 1])) {
        const vowelChar = lowerInput[i + 1];
        if (vowelMatras[vowelChar]) {
          result += vowelMatras[vowelChar];
          i += 2;
          matched = true;
        }
      }

      if (!matched) {
        // Add halant to remove inherent 'a'
        if (i + 1 < lowerInput.length && !isVowel(lowerInput[i + 1])) {
          result += '्';
        }
        i++;
      }
      matched = true;
    }
    // Check for vowels
    else if (isVowel(char)) {
      const twoCharVowel = lowerInput.substr(i, 2);

      if (vowels[twoCharVowel]) {
        result += vowels[twoCharVowel];
        i += 2;
        matched = true;
      } else if (vowels[char]) {
        result += vowels[char];
        i++;
        matched = true;
      }
    }

    // If no match, keep original
    if (!matched) {
      result += char;
      i++;
    }
  }

  return result || input;
}

// Function to get transliteration suggestions
export function getTransliterationSuggestions(input: string): string[] {
  const lowerInput = input.toLowerCase();
  const suggestions: string[] = [];

  // Find words that start with the input
  Object.keys(commonWords).forEach(key => {
    if (key.startsWith(lowerInput) && key !== lowerInput) {
      suggestions.push(commonWords[key]);
    }
  });

  return suggestions.slice(0, 5);
}
