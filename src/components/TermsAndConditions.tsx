import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

interface TermsAndConditionsProps {
  onBack: () => void;
}

export default function TermsAndConditions({ onBack }: TermsAndConditionsProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6">
          <div className="flex items-center gap-3 text-white">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <FileText className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Terms and Conditions</h1>
          </div>
          <p className="text-blue-100 mt-2">नियम आणि अटी</p>
        </div>

        {/* Content */}
        <div className="p-8 prose prose-gray max-w-none">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the Marathi Number Converter website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>मराठी:</strong> मराठी संख्या रूपांतरक वेबसाइट वापरून तुम्ही या नियम आणि अटींशी सहमत आहात.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed">
                Permission is granted to temporarily use the Marathi Number Converter for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Service Description</h2>
              <p className="text-gray-600 leading-relaxed">
                The Marathi Number Converter is a free online tool that converts numeric values into Marathi numerals (Devanagari script) and Marathi words. The service supports numbers up to 99 lakh crores.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>मराठी:</strong> हे साधन संख्यांचे मराठी अंकात आणि शब्दांत रूपांतर करते.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Accuracy Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to provide accurate conversions, we do not guarantee the absolute accuracy of all conversions. Users should verify important conversions independently. We are not liable for any errors or omissions in the conversion results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. User Conduct</h2>
              <p className="text-gray-600 leading-relaxed">
                Users agree to use the service responsibly and not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Attempt to overload or disrupt the service</li>
                <li>Use automated tools to access the service excessively</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The service and its original content, features, and functionality are owned by the Marathi Number Converter team and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall the Marathi Number Converter team be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us through the website.
              </p>
            </section>

            <div className="bg-gray-50 rounded-lg p-4 mt-8">
              <p className="text-sm text-gray-500">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}