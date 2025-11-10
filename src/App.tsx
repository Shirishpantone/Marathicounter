import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { HomePage } from './components/pages/HomePage';
import Dictionary from './components/Dictionary';

type Page = 'home' | 'grammar' | 'dictionary' | 'features' | 'dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#2C3E50',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            },
            success: {
              iconTheme: {
                primary: '#27AE60',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#E74C3C',
                secondary: '#fff',
              },
            },
          }}
        />

        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        <main className="pt-16 md:pt-20">
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'dictionary' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Dictionary />
            </div>
          )}
          {currentPage === 'grammar' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-charcoal mb-4">Grammar Checker</h2>
                <p className="text-charcoal-light">Coming soon with AI-powered checking</p>
              </div>
            </div>
          )}
          {currentPage === 'features' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-charcoal mb-4">Features</h2>
                <p className="text-charcoal-light">Scroll down on home page to see features</p>
              </div>
            </div>
          )}
          {currentPage === 'dashboard' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-charcoal mb-4">Dashboard</h2>
                <p className="text-charcoal-light">Track your progress and statistics</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </AuthProvider>
  );
}
