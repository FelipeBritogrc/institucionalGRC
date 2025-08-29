
import React from "react";

const HeroLogo: React.FC = () => {
  return (
    <div className="relative z-10 flex items-center justify-center lg:justify-start">
      <div className="relative group">
        {/* Logo principal - muito maior */}
        <img 
          src="/grc-uploads/fdc4c64e-73f8-4a5e-a8d8-5c726f839b58.png" 
          alt="Grupo RedeCompras"
          className="w-80 h-auto max-w-full sm:w-96 md:w-[26rem] lg:w-[30rem] xl:w-[32rem] 2xl:w-[36rem] 
                   filter drop-shadow-2xl 
                   hover:drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] 
                   transition-all duration-700 
                   transform hover:scale-105"
          draggable={false}
          style={{
            filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))',
            maxWidth: '90vw'
          }}
        />
        
        {/* Brilho sutil atrás da logo */}
        <div className="absolute inset-0 bg-white/30 blur-3xl scale-125 -z-10 opacity-60" />
      </div>
    </div>
  );
};

export default HeroLogo;
