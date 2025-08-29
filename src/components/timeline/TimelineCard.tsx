
import React from "react";
import { TimelineItem } from "@/data/timeline";

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  totalItems: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, index, totalItems }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Optimized Image Section - Reduced height for better viewport fit */}
        <div className="relative overflow-hidden">
          <div className="aspect-[16/9] w-full h-[200px] sm:h-[280px] lg:h-[320px] max-h-[35vh]">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Year Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold text-base sm:text-lg shadow-lg">
            {item.year}
          </div>
          
          {/* Icon */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-2xl sm:text-3xl bg-white/20 backdrop-blur-md rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/30 shadow-lg">
            {item.icon}
          </div>
        </div>

        {/* Optimized Content Section */}
        <div className="p-6 sm:p-8">
          <h3 className="font-bold text-xl sm:text-2xl text-[#282e76] mb-3 sm:mb-4 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-3">
            {item.description}
          </p>
          
          {/* Timeline Indicator */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0d7c3d] rounded-full" />
              <span>Marco {index + 1} de {totalItems}</span>
            </div>
            <div className="h-3 sm:h-4 w-px bg-gray-300" />
            <span>Grupo RedeCompras</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
