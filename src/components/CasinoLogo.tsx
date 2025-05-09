import React from 'react';
import { Flame } from 'lucide-react';

const CasinoLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2 text-4xl font-black md:text-5xl lg:text-6xl">
        <span className="animate-pulse text-red-500">
          <Flame size={48} />
        </span>
        <span className="casino-text">PULPOBET</span>
        <span className="animate-pulse text-red-500">
          <Flame size={48} />
        </span>
      </div>
      <div className="mt-1 text-xl font-light tracking-widest text-golden-100 md:text-2xl">
        CASINO VIP
      </div>
    </div>
  );
};

export default CasinoLogo;