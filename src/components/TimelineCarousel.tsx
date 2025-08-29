
import React from "react";
import TimelineCarouselOptimized from "./timeline/TimelineCarouselOptimized";

// Wrapper component to maintain backward compatibility
const TimelineCarousel: React.FC = () => {
  return <TimelineCarouselOptimized />;
};

export default TimelineCarousel;
