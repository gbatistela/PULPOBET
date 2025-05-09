import React from 'react';

interface CasinoButtonProps {
  href: string;
}

const CasinoButton: React.FC<CasinoButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block w-full max-w-xs overflow-hidden rounded-lg bg-gradient-to-r from-golden-600 to-golden-400 p-[2px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-golden"
    >
      <div className="relative rounded-lg bg-black bg-opacity-90 px-5 py-4 text-center text-xl font-bold text-white transition-all duration-300 group-hover:bg-opacity-80">
        👉 ENTRAR AL CASINO
        <div className="absolute -inset-1 -z-10 animate-pulse opacity-30"></div>
      </div>
    </a>
  );
};

export default CasinoButton;