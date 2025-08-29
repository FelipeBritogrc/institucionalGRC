
import React from "react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

const VisionCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(13, 124, 61, 0.15)"
      }}
      className="group bg-gradient-to-br from-[#0d7c3d]/5 to-white rounded-3xl p-8 lg:p-10 border border-[#0d7c3d]/10 hover:border-[#0d7c3d]/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d7c3d]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center mb-6 relative z-10">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0d7c3d] to-green-600 p-3 rounded-2xl mr-4 shadow-lg"
        >
          <Eye className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold text-[#0d7c3d] group-hover:text-green-700 transition-colors duration-300">
          Nossa Visão
        </h3>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors duration-300">
        Alcançar a liderança entre as empresas paraibanas em excelência de atendimento 
        e resultados sustentáveis.
      </p>
    </motion.div>
  );
};

export default VisionCard;
