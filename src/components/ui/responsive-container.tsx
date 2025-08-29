import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  centerContent?: boolean;
}

const maxWidthClasses = {
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl'
};

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className,
  maxWidth = '6xl',
  centerContent = true
}) => {
  return (
    <div 
      className={cn(
        'w-full px-4 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        centerContent && 'mx-auto',
        'overflow-x-hidden', // Prevent horizontal overflow
        className
      )}
      style={{
        maxWidth: maxWidth === '7xl' ? '1400px' : undefined // Limit ultra-wide
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;