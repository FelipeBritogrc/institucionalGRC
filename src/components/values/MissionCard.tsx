
import React from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const MissionCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(40, 46, 118, 0.15)"
      }}
      className="group bg-gradient-to-br from-[#282e76]/5 to-white rounded-3xl p-8 lg:p-10 border border-[#282e76]/10 hover:border-[#282e76]/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#282e76]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center mb-6 relative z-10">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#282e76] to-blue-600 p-3 rounded-2xl mr-4 shadow-lg"
        >
          <Shield className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold text-[#282e76] group-hover:text-[#19317C] transition-colors duration-300">
          Nossa Missão
        </h3>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors duration-300">
        Gerar experiências no consumo promovendo o bem estar, a conveniência e a inovação, 
        construindo assim relacionamentos duradouros com clientes, colaboradores, parceiros 
        e a comunidade ao nosso redor.
      </p>
    </motion.div>
  );
};

export default MissionCard;
