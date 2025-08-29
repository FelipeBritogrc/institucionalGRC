import { useState, useEffect, useCallback } from 'react';

export interface OptimizedImageOptions {
  eager?: boolean;
  placeholder?: string;
  quality?: number;
  sizes?: string;
}

export const useOptimizedImage = (
  src: string,
  options: OptimizedImageOptions = {}
) => {
  const { eager = false, placeholder, quality = 80 } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder || '');

  const loadImage = useCallback(() => {
    if (!src) return;

    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
      setIsError(false);
    };

    img.onerror = () => {
      setIsError(true);
      setIsLoaded(false);
    };

    img.src = src;
  }, [src]);

  useEffect(() => {
    if (eager) {
      loadImage();
    }
  }, [eager, loadImage]);

  const triggerLoad = useCallback(() => {
    if (!isLoaded && !isError) {
      loadImage();
    }
  }, [isLoaded, isError, loadImage]);

  return {
    src: currentSrc,
    isLoaded,
    isError,
    triggerLoad
  };
};

export const useImagePreloader = (images: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const preloadImage = useCallback((src: string) => {
    if (loadedImages.has(src) || loadingImages.has(src)) return;

    setLoadingImages(prev => new Set(prev).add(src));

    const img = new Image();
    img.onload = () => {
      setLoadedImages(prev => new Set(prev).add(src));
      setLoadingImages(prev => {
        const newSet = new Set(prev);
        newSet.delete(src);
        return newSet;
      });
    };
    img.onerror = () => {
      setLoadingImages(prev => {
        const newSet = new Set(prev);
        newSet.delete(src);
        return newSet;
      });
    };
    img.src = src;
  }, [loadedImages, loadingImages]);

  const preloadImages = useCallback((imageSrcs: string[]) => {
    imageSrcs.forEach(preloadImage);
  }, [preloadImage]);

  return {
    loadedImages,
    loadingImages,
    preloadImage,
    preloadImages,
    isLoaded: (src: string) => loadedImages.has(src),
    isLoading: (src: string) => loadingImages.has(src)
  };
};