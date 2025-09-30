import React from 'react';
import { Calculator, FileText, Shield } from 'lucide-react';

interface HeaderProps {
  currentPage: 'converter' | 'terms' | 'privacy';
  onNavigate: (page: 'converter' | 'terms' | 'privacy') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('converter')}
            className="flex items-center gap-3 text-orange-600 hover:text-orange-700 transition-colors duration-200"
          >
            <Calculator className="w-8 h-8" />
            <div className="text-left">
              <h1 className="text-xl font-bold">मराठी संख्या रूपांतरक</h1>
              <p className="text-sm text-gray-500">Marathi Number Converter</p>
            </div>
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('converter')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                currentPage === 'converter'
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Converter</span>
            </button>
            
            <button
              onClick={() => onNavigate('terms')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                currentPage === 'terms'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Terms</span>
            </button>
            
            <button
              onClick={() => onNavigate('privacy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                currentPage === 'privacy'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Privacy</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}