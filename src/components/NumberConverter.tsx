import React, { useState, useEffect } from 'react';
import { Calculator, Hash, Type, Copy, Check, Globe, ChevronDown } from 'lucide-react';
import { convertToMarathiNumerals, convertToMarathiWords, formatNumberWithCommas } from '../utils/marathiConverter';

export default function NumberConverter() {
  const [inputValue, setInputValue] = useState('');
  const [number, setNumber] = useState<number | null>(null);
  const [marathiNumerals, setMarathiNumerals] = useState('');
  const [marathiWords, setMarathiWords] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [language, setLanguage] = useState<'english' | 'marathi'>('english');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (inputValue.trim() === '') {
      setNumber(null);
      setMarathiNumerals('');
      setMarathiWords('');
      return;
    }

    const parsedNumber = parseFloat(inputValue.replace(/,/g, ''));
    
    if (!isNaN(parsedNumber) && parsedNumber <= 99999999999999) {
      setNumber(parsedNumber);
      setMarathiNumerals(convertToMarathiNumerals(Math.floor(parsedNumber).toString()));
      setMarathiWords(convertToMarathiWords(Math.floor(parsedNumber)));
    } else {
      setNumber(null);
      setMarathiNumerals('');
      setMarathiWords('');
    }
  }, [inputValue]);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Mobile Language Dropdown - Top Right Corner */}
      <div className="sm:hidden fixed top-20 right-4 z-40">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 px-3 py-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg text-sm font-medium text-gray-700 hover:border-gray-300 transition-all duration-200"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'english' ? 'EN' : 'मर'}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-xl overflow-hidden min-w-[120px]">
              <button
                onClick={() => {
                  setLanguage('english');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                  language === 'english'
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('marathi');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                  language === 'marathi'
                    ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                मराठी
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Input Section */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8">
            <label htmlFor="number-input" className="block text-base sm:text-lg font-semibold text-gray-700 mb-3">
              संख्या प्रविष्ट करा (Number Input)
            </label>
            <div className="relative">
              <Hash className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                id="number-input"
                type="text"
                value={inputValue}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only numbers, commas, and decimal points
                  if (/^[0-9,]*\.?[0-9]*$/.test(value) || value === '') {
                    setInputValue(value);
                  }
                }}
                placeholder="उदा: 12345"
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 outline-none"
              />
            </div>
            {number !== null && (
              <div className="mt-3 text-xs sm:text-sm text-gray-600">
                Formatted: {formatNumberWithCommas(number)}
              </div>
            )}
          </div>

          {/* Language Options - Desktop Only */}
          <div className="mb-6 sm:mb-8 hidden sm:block">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                {language === 'english' ? 'Language / भाषा' : 'भाषा / Language'}
              </span>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setLanguage('english')}
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base font-medium ${
                  language === 'english'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('marathi')}
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base font-medium ${
                  language === 'marathi'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                मराठी
              </button>
            </div>
          </div>

          {/* Results Section */}
          {number !== null && (
            <div className="space-y-4 sm:space-y-6">
              {/* Marathi Numerals */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-100">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Hash className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 truncate">
                      {language === 'english' ? 'Devanagari Numerals (मराठी अंक)' : 'मराठी अंक (Devanagari Numerals)'}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(marathiNumerals, 'numerals')}
                    className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors duration-200 flex-shrink-0"
                  >
                    {copied === 'numerals' ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                    <span className="hidden sm:inline">
                      {copied === 'numerals' 
                        ? (language === 'english' ? 'Copied!' : 'कॉपी झाले!') 
                        : (language === 'english' ? 'Copy' : 'कॉपी')
                      }
                    </span>
                  </button>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 bg-white rounded-lg p-3 sm:p-4 text-center break-all">
                  {marathiNumerals}
                </div>
              </div>

              {/* Marathi Words */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-100">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Type className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 truncate">
                      {language === 'english' ? 'Marathi Words (मराठी शब्द)' : 'मराठी शब्द (Marathi Words)'}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(marathiWords, 'words')}
                    className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors duration-200 flex-shrink-0"
                  >
                    {copied === 'words' ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                    <span className="hidden sm:inline">
                      {copied === 'words' 
                        ? (language === 'english' ? 'Copied!' : 'कॉपी झाले!') 
                        : (language === 'english' ? 'Copy' : 'कॉपी')
                      }
                    </span>
                  </button>
                </div>
                <div className="text-base sm:text-xl lg:text-2xl font-bold text-green-800 bg-white rounded-lg p-3 sm:p-4 text-center leading-relaxed break-words">
                  {marathiWords}
                </div>
              </div>

              {/* Example Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-100">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  {language === 'english' ? 'Complete Conversion (संपूर्ण रूपांतरण)' : 'संपूर्ण रूपांतरण (Complete Conversion)'}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 font-medium text-sm sm:text-base min-w-[80px] sm:min-w-[100px]">English:</span>
                    <span className="text-sm sm:text-lg font-bold text-purple-800 break-all">{formatNumberWithCommas(number)}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 font-medium text-sm sm:text-base min-w-[80px] sm:min-w-[100px]">Devanagari:</span>
                    <span className="text-sm sm:text-lg font-bold text-purple-800 break-all">{marathiNumerals}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-gray-600 font-medium text-sm sm:text-base min-w-[80px] sm:min-w-[100px] flex-shrink-0">Words:</span>
                    <span className="text-sm sm:text-lg font-bold text-purple-800 leading-relaxed break-words">
                      {language === 'english' ? marathiWords : marathiWords}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          {number === null && (
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                {language === 'english' ? 'Instructions (वापरकर्ता मार्गदर्शन)' : 'वापरकर्ता मार्गदर्शन (Instructions)'}
              </h3>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                    {language === 'english' ? '✨ Features (वैशिष्ट्ये)' : '✨ वैशिष्ट्ये (Features)'}
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                    {language === 'english' ? (
                      <>
                        <li>• Convert numbers to Devanagari numerals</li>
                        <li>• Convert numbers to Marathi words</li>
                        <li>• Support up to 99 lakh crores</li>
                        <li>• One-click copy functionality</li>
                      </>
                    ) : (
                      <>
                        <li>• संख्या देवनागरी अंकांत रूपांतरित करा</li>
                        <li>• संख्या मराठी शब्दांत रूपांतरित करा</li>
                        <li>• ९९ लाख कोटींपर्यंत संख्यांचे समर्थन</li>
                        <li>• एका क्लिकमध्ये कॉपी करा</li>
                      </>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                    {language === 'english' ? '📝 Examples (उदाहरणे)' : '📝 उदाहरणे (Examples)'}
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                    <li>• <span className="font-mono">123</span> → <span className="font-bold">१२३</span></li>
                    <li>• <span className="font-mono">456</span> → <span className="font-bold">
                      {language === 'english' ? 'चारशे छप्पन्न (four hundred fifty-six)' : 'चारशे छप्पन्न'}
                    </span></li>
                    <li>• <span className="font-mono">100</span> → <span className="font-bold">
                      {language === 'english' ? 'एकशे (one hundred)' : 'एकशे'}
                    </span></li>
                    <li>• <span className="font-mono">1000</span> → <span className="font-bold">
                      {language === 'english' ? 'एक हजार (one thousand)' : 'एक हजार'}
                    </span></li>
                    <li>• <span className="font-mono">100000</span> → <span className="font-bold">
                      {language === 'english' ? 'एक लाख (one lakh)' : 'एक लाख'}
                    </span></li>
                    <li>• <span className="font-mono">10000000</span> → <span className="font-bold">
                      {language === 'english' ? 'एक कोटी (one crore)' : 'एक कोटी'}
                    </span></li>
                    <li>• <span className="font-mono">1000000000</span> → <span className="font-bold">
                      {language === 'english' ? 'एक अर्ब (one abj = 100 crores)' : 'एक अर्ब (शंभर कोटी)'}
                    </span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 sm:mt-8 text-gray-500 text-sm sm:text-base px-4">
        <p>
          {language === 'english' 
            ? 'Marathi Number Conversion Tool (मराठी भाषेतील संख्या रूपांतरण साधन)' 
            : 'मराठी भाषेतील संख्या रूपांतरण साधन (Marathi Number Conversion Tool)'
          }
        </p>
      </div>
    </div>
  );
}