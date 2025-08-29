
import React from "react";
import { motion } from "framer-motion";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Subtle Brand Color Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#282e76]/3 via-transparent to-[#0d7c3d]/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(40,46,118,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(13,124,61,0.08),transparent_40%)]" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(40,46,118,0.05)_50%,transparent_51%)] bg-[length:60px_60px]" />
      </div>

      {/* Smaller floating elements only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#0d7c3d]/20 rounded-full blur-sm"
        />
        
        <motion.div
          animate={{ 
            x: [0, -10, 0],
            y: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#282e76]/20 rounded-full blur-sm"
        />
      </div>

      {/* Subtle Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Bottom fade to ensure smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </>
  );
};

export default HeroBackground;
