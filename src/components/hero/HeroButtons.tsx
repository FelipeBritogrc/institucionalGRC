
import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-start lg:justify-end">
      <Link
        to="/history"
        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0d7c3d] hover:bg-[#059669] text-white font-inter font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg rounded-xl border-2 border-[#0d7c3d]"
      >
        <Calendar className="w-6 h-6" />
        Conheça Nossa História
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <Link
        to="/brands"
        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-sm border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-inter font-bold transition-all duration-300 transform hover:-translate-y-1 text-lg rounded-xl shadow-lg hover:shadow-xl"
      >
        Nossas Marcas e Lojas
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default HeroButtons;
