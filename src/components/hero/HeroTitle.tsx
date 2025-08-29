
import React from "react";

const HeroTitle: React.FC = () => {
  return (
    <h1 className="font-blacker-heavy text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 text-left lg:text-right">
      <span className="block text-[#282e76] mb-4 drop-shadow-lg">
        Grupo
      </span>
      <span className="block text-[#0d7c3d] drop-shadow-lg">
        RedeCompras
      </span>
    </h1>
  );
};

export default HeroTitle;
