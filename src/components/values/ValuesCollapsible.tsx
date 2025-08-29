
import React, { useState } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VALUES_DATA = [
  {
    title: "1. Excelência no Atendimento",
    description: "Buscamos encantar nossos clientes em cada detalhe, proporcionando uma experiência de compras única combinando qualidade, inovação e atenção genuína às suas necessidades."
  },
  {
    title: "2. Integridade",
    description: "A integridade é nosso compromisso absoluto: fazemos sempre o certo, garantindo transparência e confiança em cada interação."
  },
  {
    title: "3. Cuidado e Valorização das Pessoas",
    description: "Cada pessoa é essencial para nosso sucesso – cuidamos, respeitamos e valorizamos quem faz parte da nossa jornada."
  },
  {
    title: "4. Responsabilidade Socioambiental",
    description: "Reduzir, reutilizar e reciclar começa com você: contribua para um futuro mais sustentável e faça a diferença."
  },
  {
    title: "5. Humildade e Respeito",
    description: "Valorizamos o respeito e a humildade, aprendendo com cada pessoa e fortalecendo nosso crescimento por meio do trabalho em equipe."
  },
  {
    title: "6. Crença em Deus",
    description: "Nossa fé em Deus nos permite caminhar com confiança, sabendo que cada passo é guiado por um propósito maior."
  },
  {
    title: "7. Atitude de Dono",
    description: "Agimos com paixão e responsabilidade, cuidando de cada detalhe e fazendo acontecer com propósito e dedicação."
  }
];

const ValuesCollapsible: React.FC = () => {
  const [isValuesExpanded, setIsValuesExpanded] = useState(false);

  const toggleValues = () => {
    setIsValuesExpanded(!isValuesExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      className="mt-16"
    >
      <div className="group bg-gradient-to-br from-purple-50/50 to-white rounded-3xl border border-purple-100 hover:border-purple-200 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div 
          onClick={toggleValues}
          className="flex items-center justify-between p-8 lg:p-12 cursor-pointer relative z-10"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl mr-4 shadow-lg"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                Nossos Valores
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Os pilares que orientam nossa conduta e decisões
              </p>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isValuesExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-4"
          >
            <ChevronDown className="w-8 h-8 text-purple-600" />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isValuesExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: { duration: 0.4, ease: "easeInOut" },
                  opacity: { duration: 0.3, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.2 }
                }
              }}
              className="overflow-hidden"
            >
              <div className="px-8 lg:px-12 pb-8 lg:pb-12 space-y-8 relative z-10 border-t border-purple-100/50">
                {VALUES_DATA.map((valor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="group/valor cursor-pointer pt-6"
                  >
                    <h4 className="text-xl font-bold text-[#282e76] mb-3 group-hover/valor:text-[#19317C] transition-colors duration-300">
                      {valor.title}
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed group-hover/valor:text-gray-800 transition-colors duration-300">
                      {valor.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ValuesCollapsible;
