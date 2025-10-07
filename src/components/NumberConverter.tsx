import React, { useState, useEffect } from 'react';
import { Calculator, Hash, Type, Copy, Check } from 'lucide-react';
import { convertToMarathiNumerals, convertToMarathiWords, formatNumberWithCommas } from '../utils/marathiConverter';

export default function NumberConverter() {
  const [inputValue, setInputValue] = useState('');
  const [number, setNumber] = useState<number | null>(null);
  const [marathiNumerals, setMarathiNumerals] = useState('');
  const [marathiWords, setMarathiWords] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

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
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Input Section */}
        <div className="p-8">
          <div className="mb-8">
            <label htmlFor="number-input" className="block text-lg font-semibold text-gray-700 mb-3">
              संख्या प्रविष्ट करा (Number Input)
            </label>
            <div className="relative">
              <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
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
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 outline-none"
              />
            </div>
            {number !== null && (
              <div className="mt-3 text-sm text-gray-600">
                Formatted: {formatNumberWithCommas(number)}
              </div>
            )}
          </div>

          {/* Results Section */}
          {number !== null && (
            <div className="space-y-6">
              {/* Marathi Numerals */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Hash className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-800">मराठी अंक (Devanagari Numerals)</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(marathiNumerals, 'numerals')}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors duration-200"
                  >
                    {copied === 'numerals' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied === 'numerals' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="text-3xl font-bold text-blue-800 bg-white rounded-lg p-4 text-center">
                  {marathiNumerals}
                </div>
              </div>

              {/* Marathi Words */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Type className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-800">मराठी शब्द (Marathi Words)</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(marathiWords, 'words')}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors duration-200"
                  >
                    {copied === 'words' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied === 'words' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="text-2xl font-bold text-green-800 bg-white rounded-lg p-4 text-center leading-relaxed">
                  {marathiWords}
                </div>
              </div>

              {/* Example Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">संपूर्ण रूपांतरण (Complete Conversion)</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 font-medium min-w-[100px]">English:</span>
                    <span className="text-lg font-bold text-purple-800">{formatNumberWithCommas(number)}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 font-medium min-w-[100px]">Devanagari:</span>
                    <span className="text-lg font-bold text-purple-800">{marathiNumerals}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-gray-600 font-medium min-w-[100px]">Words:</span>
                    <span className="text-lg font-bold text-purple-800 leading-relaxed">{marathiWords}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          {number === null && (
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">वापरकर्ता मार्गदर्शन (Instructions)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">✨ वैशिष्ट्ये (Features)</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• संख्या देवनागरी अंकांत रूपांतरित करा</li>
                    <li>• संख्या मराठी शब्दांत रूपांतरित करा</li>
                    <li>• ९९ लाख कोटींपर्यंत संख्यांचे समर्थन</li>
                    <li>• एका क्लिकमध्ये कॉपी करा</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">📝 उदाहरणे (Examples)</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• <span className="font-mono">123</span> → <span className="font-bold">१२३</span></li>
                    <li>• <span className="font-mono">456</span> → <span className="font-bold">चारशे छप्पन्न</span></li>
                    <li>• <span className="font-mono">1000</span> → <span className="font-bold">एक हजार</span></li>
                    <li>• <span className="font-mono">100000</span> → <span className="font-bold">एक लाख</span></li>
                    <li>• <span className="font-mono">10000000</span> → <span className="font-bold">एक कोटी</span></li>
                    <li>• <span className="font-mono">1000000000</span> → <span className="font-bold">एक अर्ब</span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500">
        <p>मराठी भाषेतील संख्या रूपांतरण साधन</p>
      </div>
    </div>
  );
}