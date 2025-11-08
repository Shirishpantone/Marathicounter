import React from 'react';
import { Calculator, FileText, Shield, Menu, X, Scale } from 'lucide-react';

interface HeaderProps {
  currentPage: 'converter' | 'dictionary' | 'terms' | 'privacy';
  onNavigate: (page: 'converter' | 'dictionary' | 'terms' | 'privacy') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (page: 'converter' | 'dictionary' | 'terms' | 'privacy') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-blue-700">कायदेशीर मराठी शब्दकोश</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Legal Marathi Dictionary</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
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
                onClick={() => onNavigate('dictionary')}
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                  currentPage === 'dictionary'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <Scale className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Legal Dictionary</span>
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 py-3 space-y-2">
            <button
              onClick={() => handleNavigate('converter')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-base ${
                currentPage === 'converter'
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Converter
            </button>

            <button
              onClick={() => handleNavigate('dictionary')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-base ${
                currentPage === 'dictionary'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Scale className="w-4 h-4" />
              Legal Dictionary
            </button>

            <button
              onClick={() => handleNavigate('terms')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-base ${
                currentPage === 'terms'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              Terms
            </button>

            <button
              onClick={() => handleNavigate('privacy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-base ${
                currentPage === 'privacy'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-4 h-4" />
              Privacy
            </button>
          </nav>
        </div>
      )}
    </>
  );
}