import React from 'react';
import { Delete, Space } from 'lucide-react';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onSpace: () => void;
}

export function VirtualKeyboard({ onKeyPress, onBackspace, onSpace }: VirtualKeyboardProps) {
  const marathiKeys = [
    // Row 1 - Numbers and symbols
    ['१', '२', '३', '४', '५', '६', '७', '८', '९', '०'],
    // Row 2 - Vowels and consonants
    ['ौ', 'ै', 'ा', 'ी', 'ू', 'ब', 'ह', 'ग', 'द', 'ज', 'ड', '़'],
    // Row 3 - More consonants
    ['ो', 'े', '्', 'ि', 'ु', 'प', 'र', 'क', 'त', 'च', 'ट'],
    // Row 4 - Additional characters
    ['ॉ', 'ं', 'म', 'न', 'व', 'ल', 'स', 'य', 'श', 'ष'],
    // Row 5 - More characters
    ['ॅ', 'ः', 'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ'],
    // Row 6 - Consonants
    ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ'],
    // Row 7 - More consonants
    ['ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न'],
    // Row 8 - Final consonants
    ['प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व'],
    // Row 9 - Last row
    ['श', 'ष', 'स', 'ह', 'क्ष', 'त्र', 'ज्ञ', 'ऋ']
  ];

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">मराठी Virtual Keyboard</h3>
          <div className="text-sm text-gray-600">
            Click on characters to type in Marathi
          </div>
        </div>
        
        <div className="space-y-2">
          {marathiKeys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1 flex-wrap">
              {row.map((key, keyIndex) => (
                <button
                  key={keyIndex}
                  onClick={() => onKeyPress(key)}
                  className="min-w-[40px] h-10 px-2 bg-white hover:bg-gray-100 border border-gray-300 rounded text-lg font-medium text-gray-800 transition-colors duration-150 hover:shadow-sm active:bg-gray-200"
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
          
          {/* Special keys row */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={onBackspace}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors duration-150"
            >
              <Delete className="w-4 h-4" />
              Backspace
            </button>
            
            <button
              onClick={onSpace}
              className="flex items-center gap-2 px-8 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors duration-150"
            >
              <Space className="w-4 h-4" />
              Space
            </button>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Tip: Use Ctrl+G to toggle between English and Marathi input modes
          </p>
        </div>
      </div>
    </div>
  );
}