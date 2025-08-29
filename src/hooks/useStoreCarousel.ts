
import { useState, useCallback, useMemo } from 'react';
import { throttle } from '@/utils/performance';
import { LOJAS } from '@/data/stores';

export const useStoreCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStore = useCallback(throttle(() => {
    setCurrentIndex(prev => (prev + 1) % LOJAS.length);
  }, 150), []);

  const prevStore = useCallback(throttle(() => {
    setCurrentIndex(prev => (prev - 1 + LOJAS.length) % LOJAS.length);
  }, 150), []);

  const goToStore = useCallback(throttle((index: number) => {
    setCurrentIndex(index);
  }, 150), []);

  // Memoize current store
  const currentStore = useMemo(() => LOJAS[currentIndex], [currentIndex]);

  const handleDirections = (coords: string, nome: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coords}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return {
    currentIndex,
    currentStore,
    nextStore,
    prevStore,
    goToStore,
    handleDirections,
    totalStores: LOJAS.length
  };
};
