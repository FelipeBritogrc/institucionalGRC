
import React from "react";
import ValuesBackground from "./values/ValuesBackground";
import ValuesHeader from "./values/ValuesHeader";
import MissionCard from "./values/MissionCard";
import VisionCard from "./values/VisionCard";
import ValuesCollapsible from "./values/ValuesCollapsible";
import ValuesFooter from "./values/ValuesFooter";

const ValueCardsRedesigned: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-white relative overflow-hidden">
      <ValuesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ValuesHeader />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <MissionCard />
          <VisionCard />
        </div>

        <ValuesCollapsible />
        <ValuesFooter />
      </div>
    </section>
  );
};

export default ValueCardsRedesigned;
