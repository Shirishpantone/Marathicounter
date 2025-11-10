import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Sparkles, TrendingUp, Users, Shield } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'मराठी व्याकरण तपासा';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const floatingChars = ['अ', 'आ', 'क', 'ख', 'ग', 'च', 'ज', 'त', 'प', 'म'];

  const features = [
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Grammar Checking',
      description: 'Advanced Marathi grammar checking powered by AI',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Comprehensive Dictionary',
      description: 'Extensive Marathi-English dictionary with examples',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Smart Suggestions',
      description: 'Intelligent corrections and alternative suggestions',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Track Progress',
      description: 'Monitor your writing improvements over time',
    },
    {
      icon: <Users size={32} />,
      title: 'For Everyone',
      description: 'Perfect for students, professionals, and writers',
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and always protected',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-cream via-white to-primary-50 overflow-hidden pt-20 md:pt-32 pb-20">
        {floatingChars.map((char, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl md:text-6xl font-marathi text-primary opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {char}
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-charcoal mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Perfect Your{' '}
              <span className="text-primary">Marathi</span> Writing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-charcoal-light mb-4"
            >
              Professional grammar checker and dictionary for Marathi language
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-marathi text-secondary mb-8 h-12"
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start Checking Now
              </button>
              <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-xl font-semibold text-lg hover:bg-secondary hover:text-white transition-all">
                Explore Dictionary
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 bg-white rounded-2xl shadow-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-charcoal-light">Active Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">1M+</div>
                <div className="text-charcoal-light">Words Checked</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-success mb-2">99.8%</div>
                <div className="text-charcoal-light">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-charcoal-light">
              Everything you need for perfect Marathi writing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-charcoal-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-charcoal-light">
              Three simple steps to perfect Marathi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Write or Paste', desc: 'Enter your Marathi text' },
              { step: '02', title: 'Check Grammar', desc: 'Our AI analyzes your text' },
              { step: '03', title: 'Apply Corrections', desc: 'Review and accept suggestions' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="text-6xl font-bold text-primary opacity-20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
