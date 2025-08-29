
import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Store } from '@/data/stores';

interface StoreInfoProps {
  store: Store;
  onDirections: (coords: string, nome: string) => void;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ store, onDirections }) => {
  return (
    <div className="p-6 lg:p-8 flex flex-col justify-center">
      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-[#0d7c3d] mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-800 font-semibold text-lg mb-1">{store.endereco}</p>
            <p className="text-gray-600 text-base">{store.cidade}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-[#0d7c3d] flex-shrink-0" />
          <span className="text-gray-800 font-medium text-lg">{store.telefone}</span>
        </div>
        
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-[#0d7c3d] mt-1 flex-shrink-0" />
          <span className="text-gray-800 font-medium text-base leading-relaxed">{store.horario}</span>
        </div>
      </div>

      <button
        onClick={() => onDirections(store.coords, store.nome)}
        className="w-full bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <Navigation className="w-6 h-6" />
        Como Chegar
      </button>
    </div>
  );
};

export default StoreInfo;
