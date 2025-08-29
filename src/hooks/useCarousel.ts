import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { throttle } from '@/utils/performance';

export interface CarouselOptions {
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  loop?: boolean;
}

export const useCarousel = <T>(
  items: T[],
  options: CarouselOptions = {}
) => {
  const {
    autoplayInterval = 5000,
    pauseOnHover = true,
    pauseOnFocus = true,
    loop = true
  } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize computed values
  const canGoNext = useMemo(() => loop || currentIndex < items.length - 1, [loop, currentIndex, items.length]);
  const canGoPrevious = useMemo(() => loop || currentIndex > 0, [loop, currentIndex]);
  const currentItem = useMemo(() => items[currentIndex], [items, currentIndex]);

  const clearAutoplayTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const resetAutoplayTimer = useCallback(() => {
    clearAutoplayTimer();
    if (isPlaying && autoplayInterval > 0) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(prev => {
          const nextIndex = direction === 'forward' ? prev + 1 : prev - 1;
          if (loop) {
            return nextIndex < 0 ? items.length - 1 : nextIndex % items.length;
          }
          return Math.max(0, Math.min(nextIndex, items.length - 1));
        });
      }, autoplayInterval);
    }
  }, [isPlaying, autoplayInterval, direction, items.length, loop, clearAutoplayTimer]);

  const goToNext = useCallback(throttle(() => {
    setDirection('forward');
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      if (loop) {
        return nextIndex % items.length;
      }
      return Math.min(nextIndex, items.length - 1);
    });
    if (pauseOnFocus) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), autoplayInterval);
    }
  }, 100), [items.length, loop, pauseOnFocus, autoplayInterval]);

  const goToPrevious = useCallback(throttle(() => {
    setDirection('backward');
    setCurrentIndex(prev => {
      const nextIndex = prev - 1;
      if (loop) {
        return nextIndex < 0 ? items.length - 1 : nextIndex;
      }
      return Math.max(nextIndex, 0);
    });
    if (pauseOnFocus) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), autoplayInterval);
    }
  }, 100), [items.length, loop, pauseOnFocus, autoplayInterval]);

  const goToSlide = useCallback(throttle((index: number) => {
    setDirection(index > currentIndex ? 'forward' : 'backward');
    setCurrentIndex(Math.max(0, Math.min(index, items.length - 1)));
    if (pauseOnFocus) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), autoplayInterval);
    }
  }, 100), [currentIndex, items.length, pauseOnFocus, autoplayInterval]);

  const pause = useCallback(() => {
    setIsPlaying(false);
    clearAutoplayTimer();
  }, [clearAutoplayTimer]);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    resetAutoplayTimer();
    return clearAutoplayTimer;
  }, [resetAutoplayTimer, clearAutoplayTimer]);

  useEffect(() => {
    return () => clearAutoplayTimer();
  }, [clearAutoplayTimer]);

  return {
    currentIndex,
    currentItem,
    direction,
    isPlaying,
    canGoNext,
    canGoPrevious,
    goToNext,
    goToPrevious,
    goToSlide,
    pause,
    play,
    itemsCount: items.length
  };
};