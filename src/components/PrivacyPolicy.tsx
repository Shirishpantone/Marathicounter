import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 text-white">
            <button
              onClick={onBack}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Back
            </button>
            <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-green-100 mt-2 text-sm sm:text-base">गोपनीयता धोरण</p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 prose prose-gray max-w-none prose-sm sm:prose-base">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                The Marathi Number Converter is designed with privacy in mind. We do not collect, store, or transmit any personal information or the numbers you convert.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>मराठी:</strong> आम्ही तुमची कोणतीही वैयक्तिक माहिती किंवा संख्या संग्रहित करत नाही.
              </p>
              
              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">What we DON'T collect:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Numbers you enter for conversion</li>
                <li>Personal identification information</li>
                <li>Email addresses or contact information</li>
                <li>Location data</li>
                <li>Device-specific information</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">What we MAY collect:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Basic usage analytics (page views, general usage patterns)</li>
                <li>Technical information for service improvement (browser type, general location)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Information</h2>
              <p className="text-gray-600 leading-relaxed">
                All number conversions happen entirely in your browser. No data is sent to our servers for processing. Any analytics data we collect is used solely for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Understanding how users interact with the service</li>
                <li>Improving the user experience</li>
                <li>Identifying and fixing technical issues</li>
                <li>Planning future features and improvements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Data Processing Location</h2>
              <p className="text-gray-600 leading-relaxed">
                All number conversions are processed locally in your web browser using JavaScript. Your input numbers never leave your device, ensuring complete privacy and security of your data.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>मराठी:</strong> सर्व संख्या रूपांतरण तुमच्या ब्राउझरमध्येच होते, कोणतीही माहिती बाहेर जात नाही.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Cookies and Local Storage</h2>
              <p className="text-gray-600 leading-relaxed">
                We may use cookies and local storage for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Remembering your preferences (if any)</li>
                <li>Basic analytics (anonymous usage statistics)</li>
                <li>Improving website performance</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">
                You can disable cookies in your browser settings, though this may affect some functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                We may use third-party services for analytics and website hosting. These services have their own privacy policies:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Web hosting providers</li>
                <li>Analytics services (if implemented)</li>
                <li>Content delivery networks</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">
                We ensure that any third-party services we use comply with privacy standards and do not have access to your conversion data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Since we don't collect or store your conversion data, there's no risk of your numbers being compromised. The website uses standard security measures including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>HTTPS encryption for all communications</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular security updates</li>
                <li>Client-side processing for maximum privacy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our service is safe for users of all ages, including children under 13. Since we don't collect personal information, there are no special privacy concerns for younger users. However, we recommend parental supervision for internet usage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                Since we don't store your personal data or conversion history, there's no personal data to access, modify, or delete. You have complete control over your privacy by simply using the service.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>मराठी:</strong> तुमची सर्व माहिती तुमच्या नियंत्रणात आहे कारण आम्ही ती संग्रहित करत नाही.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us through the website.
              </p>
            </section>

            <div className="bg-green-50 rounded-lg p-4 mt-8">
              <h3 className="font-semibold text-green-800 mb-2">Privacy Summary</h3>
              <p className="text-sm text-green-700">
                <strong>Bottom line:</strong> Your numbers and data stay on your device. We don't collect, store, or share your conversion data. Your privacy is completely protected.
              </p>
              <p className="text-sm text-green-600 mt-2">
                <strong>मराठी सारांश:</strong> तुमची संख्या आणि माहिती तुमच्या डिव्हाइसवरच राहते. आम्ही कोणतीही माहिती संग्रहित करत नाही.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mt-4">
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