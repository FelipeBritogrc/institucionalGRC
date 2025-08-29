
import React from "react";

const TimelineBackground: React.FC = () => {
  return (
    <>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-[#282e76]/30 to-transparent rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tl from-[#0d7c3d]/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-[#282e76]/20 to-[#0d7c3d]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#282e76]/15 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0d7c3d]/15 to-transparent" />
      </div>
    </>
  );
};

export default TimelineBackground;
