import React from 'react';
import NumberConverter from './components/NumberConverter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto py-8">
        <NumberConverter />
      </div>
    </div>
  );
}

export default App;