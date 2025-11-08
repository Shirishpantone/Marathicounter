import React, { useState, useEffect, useRef } from 'react';
import { Search, Book, Volume2, Copy, Check, Keyboard, Globe, History, Star, ExternalLink, Shield, Plus, Loader } from 'lucide-react';
import { VirtualKeyboard } from './VirtualKeyboard';
import { transliterateToMarathi } from '../utils/transliteration';

interface DictionaryEntry {
  id: string;
  english: string;
  marathi: string;
  hindi?: string;
  part_of_speech: string;
  pronunciation: string;
  definition: string;
  ipa_pronunciation?: string;
  audio_url?: string;
  examples: Array<{
    id: string;
    english_sentence: string;
    marathi_sentence: string;
    source: string;
  }>;
  sources: Array<{
    id: string;
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
  const [showContributeModal, setShowContributeModal] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const GEMINI_API_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gemini-translate`;
  const DB_API_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/dictionary-search`;

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

    try {
      const geminiResponse = await fetch(
        `${GEMINI_API_URL}?word=${encodeURIComponent(term)}&language=${inputLanguage}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (geminiResponse.ok) {
        const geminiData = await geminiResponse.json();

        if (geminiData.entry) {
          const entry: DictionaryEntry = {
            id: 'gemini-' + Date.now(),
            english: geminiData.entry.english,
            marathi: geminiData.entry.marathi,
            hindi: geminiData.entry.hindi,
            part_of_speech: geminiData.entry.part_of_speech,
            pronunciation: geminiData.entry.pronunciation,
            definition: geminiData.entry.definition,
            examples: geminiData.entry.examples || [],
            sources: [{
              id: 'gemini-source',
              name: 'Google Gemini AI',
              type: 'dictionary',
              credibility: 9
            }]
          };

          setSearchResults({
            entries: [entry],
            suggestions: [],
            totalResults: 1
          });

          if (term && !searchHistory.includes(term)) {
            setSearchHistory(prev => [term, ...prev.slice(0, 9)]);
          }

          setIsLoading(false);
          return;
        }
      }

      const dbResponse = await fetch(
        `${DB_API_URL}?term=${encodeURIComponent(term)}&language=${inputLanguage}&limit=20`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!dbResponse.ok) {
        throw new Error('Search failed');
      }

      const data = await dbResponse.json();
      setSearchResults(data);

      if (term && !searchHistory.includes(term)) {
        setSearchHistory(prev => [term, ...prev.slice(0, 9)]);
      }
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults({
        entries: [],
        suggestions: [],
        totalResults: 0
      });
    } finally {
      setIsLoading(false);
    }
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
      case 'dictionary': return <Book className="w-4 h-4 text-orange-600" />;
      default: return <Globe className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCredibilityBadge = (credibility: number) => {
    if (credibility >= 9) return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">Highly Trusted</span>;
    if (credibility >= 7) return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">Trusted</span>;
    if (credibility >= 5) return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">Verified</span>;
    return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium">Community</span>;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-white">
              <Book className="w-8 h-8 sm:w-10 sm:h-10" />
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold">English-Marathi Dictionary</h1>
                <p className="text-orange-100 text-sm sm:text-base mt-1">इंग्रजी-मराठी शब्दकोश</p>
              </div>
            </div>
            <button
              onClick={() => setShowContributeModal(true)}
              className="hidden sm:flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200"
            >
              <Plus className="w-4 h-4" />
              Contribute
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex bg-white/20 backdrop-blur-sm rounded-lg p-1">
                <button
                  onClick={() => setInputLanguage('english')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    inputLanguage === 'english'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setInputLanguage('marathi')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    inputLanguage === 'marathi'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  मराठी
                </button>
              </div>

              <button
                onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  showVirtualKeyboard
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                <Keyboard className="w-4 h-4" />
                <span className="hidden sm:inline">Virtual Keyboard</span>
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={inputLanguage === 'english' ? 'Search for English words...' : 'मराठीत शोधा...'}
                className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl focus:ring-4 focus:ring-white/30 transition-all duration-200 outline-none text-gray-800 shadow-lg"
              />
              {isLoading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Loader className="animate-spin w-5 h-5 text-orange-600" />
                </div>
              )}
            </div>

            {transliteratedText && (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white/80 text-sm">Transliteration:</p>
                <p className="text-white font-medium text-lg">{transliteratedText}</p>
              </div>
            )}
          </div>
        </div>

        {showVirtualKeyboard && (
          <div className="border-b border-gray-200 bg-gray-50">
            <VirtualKeyboard
              onKeyPress={handleVirtualKeyboardInput}
              onBackspace={() => setSearchTerm(prev => prev.slice(0, -1))}
              onSpace={() => handleVirtualKeyboardInput(' ')}
            />
          </div>
        )}

        {!searchResults && (searchHistory.length > 0 || favorites.length > 0) && (
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-6">
              {searchHistory.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
                    <History className="w-5 h-5 text-orange-600" />
                    Recent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {searchHistory.slice(0, 8).map((term, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchTerm(term)}
                        className="px-3 py-2 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 rounded-lg text-sm transition-colors duration-200 border border-gray-200"
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
                    <Star className="w-5 h-5 text-yellow-500" />
                    Favorites
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {favorites.slice(0, 8).map((term, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchTerm(term)}
                        className="px-3 py-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-800 rounded-lg text-sm transition-colors duration-200 border border-yellow-200"
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

        {searchResults && (
          <div className="p-6">
            {searchResults.entries.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {searchResults.totalResults} result{searchResults.totalResults !== 1 ? 's' : ''} found
                  </h2>
                </div>

                {searchResults.entries.map((entry) => (
                  <div key={entry.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 space-y-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <h3 className="text-3xl font-bold text-gray-800">{entry.english}</h3>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                            {entry.part_of_speech}
                          </span>
                          <button
                            onClick={() => toggleFavorite(entry.english)}
                            className={`p-2 rounded-full transition-all duration-200 ${
                              favorites.includes(entry.english)
                                ? 'text-yellow-500 hover:text-yellow-600 bg-yellow-50'
                                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <Star className="w-5 h-5" fill={favorites.includes(entry.english) ? 'currentColor' : 'none'} />
                          </button>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-orange-600">{entry.marathi}</span>
                            <button
                              onClick={() => handleCopy(entry.marathi, `marathi-${entry.id}`)}
                              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                            >
                              {copied === `marathi-${entry.id}` ?
                                <Check className="w-5 h-5 text-green-600" /> :
                                <Copy className="w-5 h-5" />
                              }
                            </button>
                          </div>
                          {entry.audio_url && (
                            <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200">
                              <Volume2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="text-gray-700">
                            <span className="font-semibold text-gray-800">Pronunciation:</span> {entry.pronunciation}
                          </p>
                          {entry.ipa_pronunciation && (
                            <p className="text-gray-700">
                              <span className="font-semibold text-gray-800">IPA:</span> /{entry.ipa_pronunciation}/
                            </p>
                          )}
                          {entry.hindi && (
                            <p className="text-gray-700">
                              <span className="font-semibold text-gray-800">Hindi:</span> {entry.hindi}
                            </p>
                          )}
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">{entry.definition}</p>
                      </div>
                    </div>

                    {entry.examples && entry.examples.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="text-lg">💬</span>
                          Example Sentences
                        </h4>
                        <div className="space-y-3">
                          {entry.examples.map((example) => (
                            <div key={example.id} className="bg-white rounded-lg p-4 border border-gray-200">
                              <p className="text-gray-800 mb-2">{example.english_sentence}</p>
                              <p className="text-orange-600 font-medium mb-2">{example.marathi_sentence}</p>
                              <p className="text-xs text-gray-500 flex items-center gap-1">
                                <Book className="w-3 h-3" />
                                {example.source}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {entry.sources && entry.sources.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="text-lg">📚</span>
                          Sources
                        </h4>
                        <div className="space-y-2">
                          {entry.sources.map((source) => (
                            <div key={source.id} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                              <div className="flex items-center gap-3 flex-1">
                                {getSourceIcon(source.type)}
                                <div className="flex-1">
                                  <p className="font-medium text-gray-800">{source.name}</p>
                                  {source.reference && (
                                    <p className="text-sm text-gray-600">{source.reference}</p>
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
                                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Book className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500 mb-4">
                  Try searching with different keywords or check your spelling.
                </p>
                {searchResults.suggestions.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-3 font-medium">Did you mean:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {searchResults.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchTerm(suggestion)}
                          className="px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg text-sm font-medium transition-colors duration-200"
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

        {!searchResults && (
          <div className="p-6 sm:p-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 sm:p-8 border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Search className="w-6 h-6 text-orange-600" />
                How to Use This Dictionary
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Search Features
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 ml-10">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Search in English or Marathi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Real-time search suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Automatic transliteration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Virtual Marathi keyboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Search history tracking</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    What You'll Find
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 ml-10">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Accurate translations with context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Pronunciation guides (Roman & IPA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Real-world example sentences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Government-verified sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Legal and technical terminology</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-orange-200">
                <p className="text-sm text-gray-600 text-center">
                  This dictionary includes verified translations from government sources, academic institutions, and trusted dictionaries.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
