
import React from "react";
import { Shield } from "lucide-react";

const EthicsHeader: React.FC = () => {
  return (
    <section className="mb-16 text-center">
      <div className="flex items-center justify-center mb-6">
        <Shield className="h-12 w-12 text-[#2545B8] mr-3" />
        <h1 className="text-4xl md:text-5xl font-bold text-[#2545B8]">Ética e Valores</h1>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Nossos princípios e diretrizes que orientam cada decisão e ação do Grupo RedeCompras
      </p>
    </section>
  );
};

export default EthicsHeader;
