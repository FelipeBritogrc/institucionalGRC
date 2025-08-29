
import React from "react";
import HeroLogo from "./hero/HeroLogo";
import HeroTitle from "./hero/HeroTitle";
import PresidentMessage from "./hero/PresidentMessage";
import HeroButtons from "./hero/HeroButtons";
import HeroBackground from "./hero/HeroBackground";

const HeroInstitutional: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Component */}
      <HeroBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen gap-8">
          {/* Logo aumentada no lado esquerdo */}
          <HeroLogo />

          {/* Content com melhor contraste */}
          <div className="relative z-10 text-slate-900">
            <HeroTitle />
            <PresidentMessage />
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInstitutional;
