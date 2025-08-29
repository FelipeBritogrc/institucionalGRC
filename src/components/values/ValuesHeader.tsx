
import React from "react";
import { motion } from "framer-motion";

const ValuesHeader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="block text-gray-900 mb-2"
        >
          Missão, Visão
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent"
        >
          e Valores
        </motion.span>
      </h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        Os fundamentos que orientam cada decisão e ação do Grupo RedeCompras.
      </motion.p>
    </motion.div>
  );
};

export default ValuesHeader;
