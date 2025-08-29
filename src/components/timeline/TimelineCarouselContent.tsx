
import React from "react";
import {
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import TimelineCard from "./TimelineCard";
import { TimelineItem } from "@/data/timeline";

interface TimelineCarouselContentProps {
  items: TimelineItem[];
}

const TimelineCarouselContent: React.FC<TimelineCarouselContentProps> = ({ items }) => {
  return (
    <CarouselContent className="-ml-2 md:-ml-4">
      {items.map((item, idx) => (
        <CarouselItem key={`${item.year}-${idx}`} className="pl-2 md:pl-4 basis-full">
          <TimelineCard 
            item={item} 
            index={idx} 
            totalItems={items.length} 
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

export default TimelineCarouselContent;
