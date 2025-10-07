import React, { useState } from 'react';
import NumberConverter from './components/NumberConverter';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

type PageType = 'converter' | 'terms' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('converter');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsAndConditions onBack={() => handleNavigate('converter')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => handleNavigate('converter')} />;
      default:
        return <NumberConverter />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto py-8">
        {renderCurrentPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;