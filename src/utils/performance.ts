import React from 'react';

// Utilitários para otimização de performance

// Debounce para evitar execuções excessivas
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

// Throttle para limitar execuções
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
) => {
  let inThrottle: boolean;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
};

// Lazy loading para componentes
export const createLazyComponent = (importFunc: () => Promise<any>) => {
  return React.lazy(importFunc);
};

// Preload de recursos críticos
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch de recursos para próxima navegação
export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Medição de performance
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Otimização de scroll
export const optimizeScroll = () => {
  let ticking = false;
  
  return (callback: () => void) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Cache simples para resultados
export const createCache = <T>(maxSize: number = 100) => {
  const cache = new Map<string, T>();
  
  return {
    get: (key: string): T | undefined => cache.get(key),
    set: (key: string, value: T): void => {
      if (cache.size >= maxSize) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
      cache.set(key, value);
    },
    has: (key: string): boolean => cache.has(key),
    clear: (): void => cache.clear(),
    size: (): number => cache.size
  };
};