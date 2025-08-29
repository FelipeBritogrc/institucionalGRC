
import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Carousel } from "@/components/ui/carousel";
import TimelineHeader from "./TimelineHeader";
import TimelineBackground from "./TimelineBackground";
import TimelineCarouselContent from "./TimelineCarouselContent";
import TimelineCarouselNavigation from "./TimelineCarouselNavigation";
import TimelineInstructions from "./TimelineInstructions";
import { TIMELINE_DATA } from "@/data/timeline";

const TimelineCarouselOptimized: React.FC = React.memo(() => {
  const [api, setApi] = useState<any>();

  // Memoize timeline data to prevent re-renders
  const timelineItems = useMemo(() => TIMELINE_DATA, []);

  const handleApiChange = useCallback((newApi: any) => {
    setApi(newApi);
  }, []);

  return (
    <section className="w-full py-6 sm:py-8 bg-gradient-to-br from-slate-50 via-blue-50/20 to-green-50/20 relative min-h-[80vh] max-h-screen flex flex-col overflow-hidden">
      <TimelineBackground />

      <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10 flex-1 flex flex-col justify-center">
        <TimelineHeader />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative w-full flex-1 max-h-[65vh] overflow-hidden"
        >
          <Carousel
            setApi={handleApiChange}
            opts={{
              align: "center",
              loop: false,
              duration: 20,
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps"
            }}
            className="relative w-full mx-auto h-full"
          >
            <TimelineCarouselContent items={timelineItems} />
            <TimelineCarouselNavigation />
          </Carousel>
        </motion.div>

        <TimelineInstructions />
      </div>
    </section>
  );
});

TimelineCarouselOptimized.displayName = 'TimelineCarouselOptimized';

export default TimelineCarouselOptimized;
