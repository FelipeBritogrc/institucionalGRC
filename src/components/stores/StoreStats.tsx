
import React from 'react';

const StoreStats: React.FC = () => {
  const stats = [
    { value: "9", label: "Lojas na Paraíba" },
    { value: "35+", label: "Anos de Tradição" },
    { value: "4.8", label: "Avaliação Média" },
    { value: "100%", label: "Satisfação" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-12 max-w-5xl mx-auto px-2">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-2xl lg:text-3xl font-bold text-[#0d7c3d] mb-2">{stat.value}</div>
          <div className="text-xs lg:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StoreStats;
