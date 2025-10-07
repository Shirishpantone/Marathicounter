import React from 'react';
import { Heart, FileText, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'converter' | 'terms' | 'privacy') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">मराठी संख्या रूपांतरक</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A free online tool to convert numbers into Marathi numerals and words. 
              Perfect for students, teachers, and anyone working with Marathi language.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              संख्यांचे मराठी अंकात आणि शब्दांत रूपांतरण करणारे मोफत साधन.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('converter')}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm"
              >
                Number Converter
              </button>
              <button
                onClick={() => onNavigate('terms')}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </button>
              <button
                onClick={() => onNavigate('privacy')}
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Convert to Devanagari numerals</li>
              <li>• Convert to Marathi words</li>
              <li>• Support metric system with अर्ब (100 crores)</li>
              <li>• One-click copy functionality</li>
              <li>• Mobile-friendly design</li>
              <li>• Completely free to use</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Marathi Number Converter. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-gray-500 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500" /> for Marathi language
          </p>
        </div>
      </div>
    </footer>
  );
}