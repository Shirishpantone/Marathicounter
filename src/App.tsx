import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NumberConverter from './components/NumberConverter';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

type Page = 'converter' | 'terms' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('converter');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'converter' && <NumberConverter />}
        {currentPage === 'terms' && <TermsAndConditions />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
      </main>

      <Footer />
    </div>
  );
}
