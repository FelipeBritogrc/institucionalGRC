
import React from "react";
import { Quote } from "lucide-react";

const PresidentMessage: React.FC = () => {
  return (
    <div className="mb-12 text-left lg:text-right">
      <div className="bg-white/98 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 relative">
        {/* Ícone de aspas */}
        <div className="absolute -top-4 left-8 lg:right-8 lg:left-auto">
          <div className="bg-[#0d7c3d] rounded-full p-3 shadow-lg">
            <Quote className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-slate-800 leading-relaxed font-normal mb-6 mt-4">
          "Estamos construindo um futuro sólido e sustentável. Nosso foco é continuar 
          <strong className="text-[#0d7c3d] font-bold"> inovando e crescendo</strong> com propósito, 
          sempre mantendo a essência que fez do Grupo RedeCompras uma parte tão importante da 
          <strong className="text-[#0d7c3d] font-bold"> vida dos paraibanos</strong>."
        </p>
        
        {/* Assinatura do Presidente */}
        <div className="text-right border-t border-slate-200 pt-4">
          <p className="text-slate-600 font-medium text-base">
            <strong className="text-[#0d7c3d]">Vamberto Farias</strong>
          </p>
          <p className="text-slate-500 text-sm">
            Presidente do Grupo RedeCompras
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;
