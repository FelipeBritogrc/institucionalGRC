
import React from "react";
import { motion } from "framer-motion";

const ValuesFooter: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      className="text-center mt-16"
    >
      <motion.div 
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(13, 124, 61, 0.1)"
        }}
        className="bg-gradient-to-r from-[#282e76]/5 via-white/50 to-[#0d7c3d]/5 rounded-3xl border border-[#0d7c3d]/20 p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#282e76]/3 via-transparent to-[#0d7c3d]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4 relative z-10 group-hover:text-[#19317C] transition-colors duration-300">
          Compromisso com a Excelência
        </h4>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10 group-hover:text-gray-700 transition-colors duration-300">
          Estes valores e princípios não são apenas palavras, mas o fundamento de todas as nossas ações 
          e decisões. Juntos, construímos um futuro mais ético e sustentável.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ValuesFooter;
