import React from 'react';
import { Heart, FileText, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'converter' | 'terms' | 'privacy') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">मराठी संख्या रूपांतरक</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              A free online tool to convert numbers into Marathi numerals and words. 
              Perfect for students, teachers, and anyone working with Marathi language.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              संख्यांचे मराठी अंकात आणि शब्दांत रूपांतरण करणारे मोफत साधन.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('converter')}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 text-xs sm:text-sm"
              >
                Number Converter
              </button>
              <button
                onClick={() => onNavigate('terms')}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                Terms & Conditions
              </button>
              <button
                onClick={() => onNavigate('privacy')}
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-200 text-xs sm:text-sm"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Features</h3>
            <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
              <li>• Convert to Devanagari numerals</li>
              <li>• Convert to Marathi words</li>
              <li>• Support metric system with अर्ब (100 crores)</li>
              <li>• One-click copy functionality</li>
              <li>• Mobile-friendly design</li>
              <li>• Completely free to use</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Marathi Number Converter. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" /> for Marathi language
          </p>
        </div>
      </div>
    </footer>
  );
}