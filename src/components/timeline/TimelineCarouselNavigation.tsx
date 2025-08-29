
import React from "react";
import {
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const TimelineCarouselNavigation: React.FC = () => {
  return (
    <>
      <CarouselPrevious 
        className="left-4 bg-white/95 backdrop-blur-sm shadow-lg border border-[#282e76]/20 hover:border-[#282e76] hover:bg-[#282e76] hover:text-white transition-all duration-300 w-12 h-12"
      />
      <CarouselNext 
        className="right-4 bg-white/95 backdrop-blur-sm shadow-lg border border-[#282e76]/20 hover:border-[#282e76] hover:bg-[#282e76] hover:text-white transition-all duration-300 w-12 h-12"
      />
    </>
  );
};

export default TimelineCarouselNavigation;
