import React from 'react';
import { Calculator, FileText, Shield } from 'lucide-react';

interface HeaderProps {
  currentPage: 'converter' | 'terms' | 'privacy';
  onNavigate: (page: 'converter' | 'terms' | 'privacy') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-orange-600">मराठी संख्या रूपांतरक</h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Marathi Number Converter</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <button
              onClick={() => onNavigate('converter')}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                currentPage === 'converter'
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Calculator className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">Converter</span>
            </button>
            
            <button
              onClick={() => onNavigate('terms')}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                currentPage === 'terms'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">Terms</span>
            </button>
            
            <button
              onClick={() => onNavigate('privacy')}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                currentPage === 'privacy'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">Privacy</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}