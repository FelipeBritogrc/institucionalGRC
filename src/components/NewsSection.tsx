
import React from 'react';
import NewsCarouselOptimized from './news/NewsCarouselOptimized';

// Wrapper component to maintain backward compatibility
const NewsSection: React.FC = () => {
  return <NewsCarouselOptimized />;
};

export default NewsSection;
