import React, { useState, useEffect, useRef } from 'react';
import { Search, Book, Volume2, Copy, Check, Keyboard, Globe, History, Star, ExternalLink, Shield } from 'lucide-react';
import { VirtualKeyboard } from './VirtualKeyboard';
import { transliterateToMarathi } from '../utils/transliteration';

interface DictionaryEntry {
  id: string;
  english: string;
  marathi: string;
  hindi?: string;
  partOfSpeech: string;
  pronunciation: string;
  definition: string;
  examples: Array<{
    english: string;
    marathi: string;
    source: string;
  }>;
  sources: Array<{
    name: string;
    type: 'government' | 'academic' | 'dictionary' | 'community';
    reference?: string;
    url?: string;
    credibility: number;
  }>;
}

interface SearchResult {
  entries: DictionaryEntry[];
  suggestions: string[];
  totalResults: number;
}

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputLanguage, setInputLanguage] = useState<'english' | 'marathi'>('english');
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [transliteratedText, setTransliteratedText] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Mock dictionary data - In real implementation, this would come from your database
  const mockDictionaryData: DictionaryEntry[] = [
    {
      id: '1',
      english: 'abandon',
      marathi: 'सोडून देणे',
      hindi: 'परित्याग करना',
      partOfSpeech: 'verb',
      pronunciation: 'soḍūn deṇe',
      definition: 'To give up completely; to desert or leave behind.',
      examples: [
        {
          english: 'The defendant decided to abandon the case.',
          marathi: 'प्रतिवादीने खटला सोडून देण्याचा निर्णय घेतला.',
          source: 'Legal corpus'
        },
        {
          english: 'Never abandon your principles.',
          marathi: 'आपली तत्त्वे कधीही सोडू नका.',
          source: 'General usage'
        }
      ],
      sources: [
        {
          name: 'Tri-Lingual Legal Glossary - Ministry of Law & Justice',
          type: 'government',
          reference: 'O.XXIII R. 1(1) Code of Civil Procedure, 1908',
          credibility: 10
        },
        {
          name: 'Wiktionary English-Marathi',
          type: 'dictionary',
          url: 'https://en.wiktionary.org',
          credibility: 8
        }
      ]
    },
    {
      id: '2',
      english: 'court',
      marathi: 'न्यायालय',
      hindi: 'न्यायालय',
      partOfSpeech: 'noun',
      pronunciation: 'nyāyālaya',
      definition: 'A tribunal presided over by a judge for the administration of justice.',
      examples: [
        {
          english: 'The case will be heard in court tomorrow.',
          marathi: 'उद्या न्यायालयात खटल्याची सुनावणी होईल.',
          source: 'Legal documents'
        }
      ],
      sources: [
        {
          name: 'Tri-Lingual Legal Glossary - Ministry of Law & Justice',
          type: 'government',
          reference: 'Legal terminology database',
          credibility: 10
        }
      ]
    }
  ];

  // Handle search with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim()) {
        performSearch(searchTerm);
      } else {
        setSearchResults(null);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Handle transliteration for English input
  useEffect(() => {
    if (inputLanguage === 'english' && searchTerm) {
      const transliterated = transliterateToMarathi(searchTerm);
      setTransliteratedText(transliterated);
    } else {
      setTransliteratedText('');
    }
  }, [searchTerm, inputLanguage]);

  const performSearch = async (term: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Mock search logic
    const results = mockDictionaryData.filter(entry => 
      entry.english.toLowerCase().includes(term.toLowerCase()) ||
      entry.marathi.includes(term) ||
      (entry.hindi && entry.hindi.includes(term))
    );

    const suggestions = mockDictionaryData
      .filter(entry => 
        entry.english.toLowerCase().startsWith(term.toLowerCase()) ||
        entry.marathi.startsWith(term)
      )
      .map(entry => inputLanguage === 'english' ? entry.english : entry.marathi)
      .slice(0, 5);

    setSearchResults({
      entries: results,
      suggestions,
      totalResults: results.length
    });

    // Add to search history
    if (term && !searchHistory.includes(term)) {
      setSearchHistory(prev => [term, ...prev.slice(0, 9)]);
    }

    setIsLoading(false);
  };

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleFavorite = (word: string) => {
    setFavorites(prev => 
      prev.includes(word) 
        ? prev.filter(w => w !== word)
        : [...prev, word]
    );
  };

  const handleVirtualKeyboardInput = (char: string) => {
    if (searchInputRef.current) {
      const input = searchInputRef.current;
      const start = input.selectionStart || 0;
      const end = input.selectionEnd || 0;
      const newValue = searchTerm.slice(0, start) + char + searchTerm.slice(end);
      setSearchTerm(newValue);
      
      // Set cursor position after inserted character
      setTimeout(() => {
        input.setSelectionRange(start + char.length, start + char.length);
        input.focus();
      }, 0);
    }
  };

  const getSourceIcon = (type: string) => {
    switch (type) {
      case 'government': return <Shield className="w-4 h-4 text-green-600" />;
      case 'academic': return <Book className="w-4 h-4 text-blue-600" />;
      case 'dictionary': return <Book className="w-4 h-4 text-purple-600" />;
      default: return <Globe className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCredibilityBadge = (credibility: number) => {
    if (credibility >= 9) return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Highly Trusted</span>;
    if (credibility >= 7) return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Trusted</span>;
    if (credibility >= 5) return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Verified</span>;
    return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Community</span>;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-3 text-white mb-4">
            <Book className="w-8 h-8" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">English-Marathi Dictionary</h1>
              <p className="text-indigo-100 text-sm sm:text-base">इंग्रजी-मराठी शब्दकोश</p>
            </div>
          </div>

          {/* Search Section */}
          <div className="space-y-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setInputLanguage('english')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    inputLanguage === 'english'
                      ? 'bg-white text-indigo-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setInputLanguage('marathi')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    inputLanguage === 'marathi'
                      ? 'bg-white text-indigo-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  मराठी
                </button>
              </div>

              <button
                onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  showVirtualKeyboard
                    ? 'bg-white text-indigo-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Keyboard className="w-4 h-4" />
                <span className="hidden sm:inline">Virtual Keyboard</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={inputLanguage === 'english' ? 'Type in English...' : 'मराठीत टाइप करा...'}
                className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl focus:ring-4 focus:ring-white/30 transition-all duration-200 outline-none text-gray-800"
              />
              {isLoading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>
                </div>
              )}
            </div>

            {/* Transliteration Preview */}
            {transliteratedText && (
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white/80 text-sm">Transliteration suggestion:</p>
                <p className="text-white font-medium">{transliteratedText}</p>
              </div>
            )}
          </div>
        </div>

        {/* Virtual Keyboard */}
        {showVirtualKeyboard && (
          <div className="border-b border-gray-200">
            <VirtualKeyboard
              onKeyPress={handleVirtualKeyboardInput}
              onBackspace={() => {
                setSearchTerm(prev => prev.slice(0, -1));
              }}
              onSpace={() => handleVirtualKeyboardInput(' ')}
            />
          </div>
        )}

        {/* Search History & Favorites */}
        {!searchResults && (searchHistory.length > 0 || favorites.length > 0) && (
          <div className="p-6 border-b border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              {searchHistory.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
                    <History className="w-4 h-4" />
                    Recent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {searchHistory.slice(0, 5).map((term, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchTerm(term)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors duration-200"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {favorites.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
                    <Star className="w-4 h-4" />
                    Favorites
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {favorites.slice(0, 5).map((term, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchTerm(term)}
                        className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-full text-sm transition-colors duration-200"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchResults && (
          <div className="p-6">
            {searchResults.entries.length > 0 ? (
              <div className="space-y-8">
                {/* Results Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {searchResults.totalResults} result{searchResults.totalResults !== 1 ? 's' : ''} found
                  </h2>
                </div>

                {/* Dictionary Entries */}
                {searchResults.entries.map((entry) => (
                  <div key={entry.id} className="bg-gray-50 rounded-xl p-6 space-y-6">
                    {/* Main Translation */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800">{entry.english}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {entry.partOfSpeech}
                          </span>
                          <button
                            onClick={() => toggleFavorite(entry.english)}
                            className={`p-1 rounded-full transition-colors duration-200 ${
                              favorites.includes(entry.english)
                                ? 'text-yellow-500 hover:text-yellow-600'
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                          >
                            <Star className="w-4 h-4" fill={favorites.includes(entry.english) ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-indigo-600">{entry.marathi}</span>
                            <button
                              onClick={() => handleCopy(entry.marathi, `marathi-${entry.id}`)}
                              className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            >
                              {copied === `marathi-${entry.id}` ? 
                                <Check className="w-4 h-4 text-green-600" /> : 
                                <Copy className="w-4 h-4" />
                              }
                            </button>
                          </div>
                          <Volume2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>

                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Pronunciation:</span> {entry.pronunciation}
                        </p>
                        
                        {entry.hindi && (
                          <p className="text-gray-600 mb-3">
                            <span className="font-medium">Hindi:</span> {entry.hindi}
                          </p>
                        )}

                        <p className="text-gray-700 leading-relaxed">{entry.definition}</p>
                      </div>
                    </div>

                    {/* Example Sentences */}
                    {entry.examples.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">💬 Example Sentences</h4>
                        <div className="space-y-3">
                          {entry.examples.map((example, index) => (
                            <div key={index} className="bg-white rounded-lg p-4">
                              <p className="text-gray-800 mb-2">{example.english}</p>
                              <p className="text-indigo-600 font-medium mb-1">{example.marathi}</p>
                              <p className="text-xs text-gray-500">Source: {example.source}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sources */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📚 Sources</h4>
                      <div className="space-y-2">
                        {entry.sources.map((source, index) => (
                          <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
                            <div className="flex items-center gap-3">
                              {getSourceIcon(source.type)}
                              <div>
                                <p className="font-medium text-gray-800">{source.name}</p>
                                {source.reference && (
                                  <p className="text-sm text-gray-600">Reference: {source.reference}</p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getCredibilityBadge(source.credibility)}
                              {source.url && (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500">
                  Try searching with different keywords or check your spelling.
                </p>
                {searchResults.suggestions.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Did you mean:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {searchResults.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchTerm(suggestion)}
                          className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-full text-sm transition-colors duration-200"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        {!searchResults && (
          <div className="p-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🔍 How to Use</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Search Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Type in English or Marathi</li>
                    <li>• Auto-suggestions as you type</li>
                    <li>• Transliteration support</li>
                    <li>• Virtual Marathi keyboard</li>
                    <li>• Voice input (coming soon)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Results Include:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accurate translations</li>
                    <li>• Pronunciation guides</li>
                    <li>• Example sentences</li>
                    <li>• Government-verified sources</li>
                    <li>• Legal terminology references</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}