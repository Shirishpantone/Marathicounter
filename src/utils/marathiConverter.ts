// Marathi number conversion utilities

// Devanagari numerals mapping
const marathiNumerals: { [key: string]: string } = {
  '0': '०',
  '1': '१',
  '2': '२',
  '3': '३',
  '4': '४',
  '5': '५',
  '6': '६',
  '7': '७',
  '8': '८',
  '9': '९'
};

// Marathi words for numbers
const marathiWords: { [key: number]: string } = {
  0: 'शून्य',
  1: 'एक',
  2: 'दोन',
  3: 'तीन',
  4: 'चार',
  5: 'पाच',
  6: 'सहा',
  7: 'सात',
  8: 'आठ',
  9: 'नऊ',
  10: 'दहा',
  11: 'अकरा',
  12: 'बारा',
  13: 'तेरा',
  14: 'चौदा',
  15: 'पंधरा',
  16: 'सोळा',
  17: 'सतरा',
  18: 'अठरा',
  19: 'एकोणीस',
  20: 'वीस',
  21: 'एकवीस',
  22: 'बावीस',
  23: 'तेवीस',
  24: 'चोवीस',
  25: 'पंचवीस',
  26: 'सव्वीस',
  27: 'सत्तावीस',
  28: 'अठ्ठावीस',
  29: 'एकोणतीस',
  30: 'तीस',
  31: 'एकतीस',
  32: 'बत्तीस',
  33: 'तेहत्तीस',
  34: 'चौतीस',
  35: 'पस्तीस',
  36: 'छत्तीस',
  37: 'सदतीस',
  38: 'अडतीस',
  39: 'एकोणचाळीस',
  40: 'चाळीस',
  41: 'एकेचाळीस',
  42: 'बेचाळीस',
  43: 'त्रेचाळीस',
  44: 'चव्वेचाळीस',
  45: 'पंचेचाळीस',
  46: 'सेहेचाळीस',
  47: 'सत्तेचाळीस',
  48: 'अठ्ठेचाळीस',
  49: 'एकोणपन्नास',
  50: 'पन्नास',
  51: 'एकावन्न',
  52: 'बावन्न',
  53: 'त्रेपन्न',
  54: 'चोपन्न',
  55: 'पंचावन्न',
  56: 'छप्पन्न',
  57: 'सत्तावन्न',
  58: 'अठ्ठावन्न',
  59: 'एकोणसाठ',
  60: 'साठ',
  61: 'एकसष्ठ',
  62: 'बासष्ठ',
  63: 'त्रेसष्ठ',
  64: 'चौसष्ठ',
  65: 'पंचसष्ठ',
  66: 'सहासष्ठ',
  67: 'सदुसष्ठ',
  68: 'अडुसष्ठ',
  69: 'एकोणसत्तर',
  70: 'सत्तर',
  71: 'एकाहत्तर',
  72: 'बाहत्तर',
  73: 'त्र्याहत्तर',
  74: 'चौर्याहत्तर',
  75: 'पंच्याहत्तर',
  76: 'शहात्तर',
  77: 'सत्त्याहत्तर',
  78: 'अठ्ठ्याहत्तर',
  79: 'एकोण ऐंशी',
  80: 'ऐंशी',
  81: 'एक्याऐंशी',
  82: 'ब्याऐंशी',
  83: 'त्र्याऐंशी',
  84: 'चौर्याऐंशी',
  85: 'पंच्याऐंशी',
  86: 'शहाऐंशी',
  87: 'सत्त्याऐंशी',
  88: 'अठ्ठ्याऐंशी',
  89: 'एकोणनव्वद',
  90: 'नव्वद',
  91: 'एक्याण्णव',
  92: 'ब्याण्णव',
  93: 'त्र्याण्णव',
  94: 'चौर्याण्णव',
  95: 'पंच्याण्णव',
  96: 'शहाण्णव',
  97: 'सत्त्याण्णव',
  98: 'अठ्ठ्याण्णव',
  99: 'नव्व्याण्णव'
};

// Convert English digits to Devanagari numerals
export function convertToMarathiNumerals(number: string): string {
  return number.replace(/[0-9]/g, (digit) => marathiNumerals[digit] || digit);
}

// Convert number to Marathi words
export function convertToMarathiWords(num: number): string {
  if (num === 0) return marathiWords[0];
  if (num < 0) return 'नकारात्मक ' + convertToMarathiWords(-num);

  // Handle numbers up to 99 directly from the mapping
  if (num <= 99 && marathiWords[num]) {
    return marathiWords[num];
  }

  let result = '';

  // Lakh Crores (10,00,00,00,00,00,000 - 1 quadrillion in Indian system)
  if (num >= 10000000000000) {
    const lakhCrores = Math.floor(num / 10000000000000);
    result += convertToMarathiWords(lakhCrores) + ' लाख कोटी ';
    num %= 10000000000000;
  }

  // Abj (1,00,00,00,000 - 1 billion = 100 crores)
  if (num >= 1000000000) {
    const abj = Math.floor(num / 1000000000);
    result += convertToMarathiWords(abj) + ' अर्ब ';
    num %= 1000000000;
  }

  // Crores (1,00,00,000)
  if (num >= 10000000) {
    const crores = Math.floor(num / 10000000);
    result += convertToMarathiWords(crores) + ' कोटी ';
    num %= 10000000;
  }

  // Lakhs (1,00,000)
  if (num >= 100000) {
    const lakhs = Math.floor(num / 100000);
    result += convertToMarathiWords(lakhs) + ' लाख ';
    num %= 100000;
  }

  // Thousands (1,000)
  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    result += convertToMarathiWords(thousands) + ' हजार ';
    num %= 1000;
  }

  // Hundreds (100)
  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    if (hundreds === 1) {
      result += 'एकशे ';
    } else {
      result += convertToMarathiWords(hundreds) + 'शे ';
    }
    num %= 100;
  }

  // Remaining numbers (1-99)
  if (num > 0) {
    result += marathiWords[num] || num.toString();
  }

  return result.trim();
}

export function formatNumberWithCommas(num: number): string {
  return num.toLocaleString('en-IN');
}