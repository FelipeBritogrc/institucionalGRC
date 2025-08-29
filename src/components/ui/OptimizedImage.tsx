
import React, { memo, forwardRef } from 'react';
import { useOptimizedImage } from '@/hooks/useOptimizedImages';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  eager?: boolean;
  quality?: number;
  containerClassName?: string;
  loadingClassName?: string;
  errorClassName?: string;
  fadeIn?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = memo(forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({
    src,
    alt,
    placeholder,
    eager = false,
    quality = 80,
    className,
    containerClassName,
    loadingClassName,
    errorClassName,
    fadeIn = true,
    onLoad,
    onError,
    ...props
  }, ref) => {
    const { elementRef, shouldAnimate } = useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true
    });

    const { 
      src: currentSrc, 
      isLoaded, 
      isError, 
      triggerLoad 
    } = useOptimizedImage(src, {
      eager,
      placeholder,
      quality
    });

    React.useEffect(() => {
      if (shouldAnimate && !eager) {
        triggerLoad();
      }
    }, [shouldAnimate, eager, triggerLoad]);

    React.useEffect(() => {
      if (isLoaded && onLoad) {
        onLoad();
      }
    }, [isLoaded, onLoad]);

    React.useEffect(() => {
      if (isError && onError) {
        onError();
      }
    }, [isError, onError]);

    if (isError) {
      return (
      <div 
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={cn(
          'flex items-center justify-center bg-gray-100 text-gray-400 aspect-[16/9]',
            errorClassName,
            containerClassName
          )}
        >
          <span className="text-sm">Erro ao carregar imagem</span>
        </div>
      );
    }

    return (
      <div 
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={cn('relative overflow-hidden aspect-[16/9]', containerClassName)}
      >
        {!isLoaded && (
          <div 
            className={cn(
              'absolute inset-0 bg-gray-100 animate-pulse',
              loadingClassName
            )}
          />
        )}
        
        <img
          ref={ref}
          src={currentSrc}
          alt={alt}
          width="1200"
          height="675"
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            {
              'opacity-0': !isLoaded && fadeIn,
              'opacity-100': isLoaded || !fadeIn
            },
            className
          )}
          {...props}
        />
      </div>
    );
  }
));

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
