
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  currentIndex: number;
  totalStores: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  currentIndex,
  totalStores,
  onPrev,
  onNext,
  onGoTo
}) => {
  return (
    <>
      {/* Navigation Dots */}
      <div className="flex justify-center py-6 gap-3 bg-gray-50">
        {Array.from({ length: totalStores }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoTo(index)}
            className={`
              transition-all duration-300 rounded-full
              ${index === currentIndex 
                ? 'bg-[#0d7c3d] w-10 h-3' 
                : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }
            `}
            aria-label={`Ir para loja ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden lg:block">
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 shadow-lg rounded-full p-4 hover:bg-white transition-all duration-200 hover:scale-110"
          aria-label="Loja anterior"
        >
          <ChevronLeft className="w-6 h-6 text-[#282e76]" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 shadow-lg rounded-full p-4 hover:bg-white transition-all duration-200 hover:scale-110"
          aria-label="Próxima loja"
        >
          <ChevronRight className="w-6 h-6 text-[#282e76]" />
        </button>
      </div>
    </>
  );
};

export default CarouselNavigation;
