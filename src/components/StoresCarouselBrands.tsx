
import React from "react";
import { useStoreCarousel } from "@/hooks/useStoreCarousel";
import StoreInfo from "@/components/stores/StoreInfo";
import CarouselNavigation from "@/components/stores/CarouselNavigation";

const StoresCarouselBrands: React.FC = () => {
  const {
    currentIndex,
    currentStore,
    nextStore,
    prevStore,
    goToStore,
    handleDirections,
    totalStores
  } = useStoreCarousel();

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Google Maps Interactive */}
            <div className="relative overflow-hidden">
              <div className="w-full h-full min-h-[500px]">
                <iframe
                  key={currentIndex}
                  src={currentStore.mapEmbedUrl}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover transition-opacity duration-300"
                  title={`Mapa da loja ${currentStore.nome}`}
                />
              </div>
              
              {/* Store Name Overlay - Redesigned */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-gradient-to-r from-[#282e76]/90 to-[#0d7c3d]/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {currentStore.nome}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    {currentStore.destaque}
                  </div>
                </div>
              </div>
            </div>

            {/* Store Information */}
            <StoreInfo store={currentStore} onDirections={handleDirections} />
          </div>

          {/* Navigation */}
          <CarouselNavigation
            currentIndex={currentIndex}
            totalStores={totalStores}
            onPrev={prevStore}
            onNext={nextStore}
            onGoTo={goToStore}
          />
        </div>
      </div>
    </section>
  );
};

export default StoresCarouselBrands;
