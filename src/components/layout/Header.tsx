import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { user, profile, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'grammar', label: 'Grammar Checker' },
    { id: 'dictionary', label: 'Dictionary' },
    { id: 'features', label: 'Features' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-primary">Marathi</span>
                <span className="text-secondary">Counter</span>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-primary'
                      : 'text-charcoal-light hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-cream hover:bg-cream-100 transition-colors">
                    <User size={20} className="text-primary" />
                    <span className="text-sm font-medium text-charcoal">
                      {profile?.full_name || 'User'}
                    </span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <button
                      onClick={() => onNavigate('dashboard')}
                      className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-cream rounded-t-xl transition-colors"
                    >
                      <LayoutDashboard size={18} className="text-charcoal-light" />
                      <span className="text-sm text-charcoal">Dashboard</span>
                    </button>
                    <button
                      onClick={signOut}
                      className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-cream rounded-b-xl transition-colors"
                    >
                      <LogOut size={18} className="text-charcoal-light" />
                      <span className="text-sm text-charcoal">Sign Out</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="px-6 py-2 text-sm font-medium text-primary hover:text-primary-600 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-600 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-charcoal p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-primary text-white'
                        : 'text-charcoal-light hover:bg-cream'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {user ? (
                  <>
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 rounded-lg text-charcoal-light hover:bg-cream transition-colors"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 rounded-lg text-error hover:bg-cream transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setShowRegister(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-white bg-gradient-to-r from-primary to-primary-600 rounded-lg font-medium"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {showLogin && (
          <Login
            onClose={() => setShowLogin(false)}
            onSwitchToRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRegister && (
          <Register
            onClose={() => setShowRegister(false)}
            onSwitchToLogin={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
