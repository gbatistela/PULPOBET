import React from 'react';

const CasinoBackground: React.FC = () => {
  return (
    <>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Animated casino elements */}
      <div className="casino-chips"></div>
      <div className="casino-cards"></div>
      <div className="casino-smoke"></div>
      
      {/* Light effects */}
      <div className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-700 opacity-20 blur-3xl"></div>
      <div className="absolute right-0 top-1/3 h-64 w-64 translate-x-1/2 rounded-full bg-red-700 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-700 opacity-10 blur-3xl"></div>
    </>
  );
};

export default CasinoBackground;