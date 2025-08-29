
import React from "react";
import { Building, Users, Globe } from "lucide-react";

const PurposeSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-[#2545B8] mb-10 text-center">Nosso Propósito</h2>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0d7c3d]">
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-[#0d7c3d] mr-3" />
            <h3 className="text-xl font-bold text-[#0d7c3d]">Nosso Negócio</h3>
          </div>
          <p className="text-gray-700 text-lg">
            Promover Experiências, Relacionamentos e Ambiência
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#2545B8]">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-[#2545B8] mr-3" />
            <h3 className="text-xl font-bold text-[#2545B8]">Nossa Missão</h3>
          </div>
          <p className="text-gray-700">
            Gerar experiências no consumo promovendo o bem estar, a conveniência e a inovação, 
            construindo assim relacionamentos duradouros com clientes, colaboradores, parceiros 
            e a comunidade ao nosso redor.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0d7c3d]">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-[#0d7c3d] mr-3" />
            <h3 className="text-xl font-bold text-[#0d7c3d]">Nossa Visão</h3>
          </div>
          <p className="text-gray-700">
            Alcançar a liderança entre as empresas paraibanas em excelência de atendimento 
            e resultados sustentáveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
