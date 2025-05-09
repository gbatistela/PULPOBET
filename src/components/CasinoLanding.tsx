import React from 'react';
import CasinoBackground from './CasinoBackground';
import CasinoLogo from './CasinoLogo';
import CasinoButton from './CasinoButton';

const CasinoLanding: React.FC = () => {
  const whatsappLink = 'https://wa.me/543413698348';
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <CasinoBackground />
      
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between p-6">
        <div className="w-full pt-8 sm:pt-12">
          <CasinoLogo />
        </div>
        
        <div className="flex w-full max-w-md flex-col items-center text-center">
          <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            🎰 Jugá y ganá dinero real
          </h1>
          <p className="mb-8 text-xl text-golden-100">
            SALDO EXTRA DEL 20% EN TU CARGA
          </p>
          <p className="mb-8 text-xl text-golden-100">
            Entra ahora al casino por WhatsApp
          </p>
          
          <CasinoButton href={whatsappLink} />
        </div>
        
        <div className="pb-4 pt-8 text-sm text-gray-400">
          +18 | Juego responsable
        </div>
      </div>
    </div>
  );
};

export default CasinoLanding;