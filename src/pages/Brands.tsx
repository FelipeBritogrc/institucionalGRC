
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoresCarouselBrands from "@/components/StoresCarouselBrands";
import { motion } from "framer-motion";

const MARCAS = [
  {
    name: "RedeCompras",
    logo: "/grc-uploads/e38487f3-74ff-4c9f-84f5-4b97dd98155e.png",
    alt: "RedeCompras",
    description: "Marca matriz do grupo empresarial"
  },
  {
    name: "BomQuéSó",
    logo: "/grc-uploads/1206498b-69b8-45e5-9d8d-f1f40e2060a3.png",
    alt: "BomQuéSó",
    description: "Rede de supermercados com foco em qualidade e preços acessíveis"
  },
  {
    name: "CDRC",
    logo: "/grc-uploads/e40be2ba-fc99-4a19-9cc4-33d754ad83c8.png",
    alt: "CDRC",
    description: "Centro de distribuição e logística"
  },
  {
    name: "Campina Atacado",
    logo: "/grc-uploads/8a1270cd-9a4e-477e-830f-7e2ff293c73e.png",
    alt: "Campina Atacado",
    description: "Atacado especializado para revenda"
  },
  {
    name: "Leal",
    logo: "/grc-uploads/e1d4062b-70fe-4c4d-8dd3-9d3827420f79.png",
    alt: "Leal",
    description: "Prestadora de serviços especializados"
  }
];

const Brands = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#282e76] to-[#0d7c3d] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Nossas Marcas e Lojas
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça nosso portfólio de marcas e encontre a loja mais próxima de você
            </p>
          </div>
        </section>

        {/* Seção de Marcas - Layout Atualizado */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/20 to-[#0d7c3d]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/20 to-[#282e76]/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 text-[#282e76]">
                Nossas marcas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um verdadeiro ecossistema de negócios. Sempre pensando no cliente, com diferentes formatos.
              </p>
            </div>

            {/* Layout das Marcas - 3 em cima, 2 embaixo centralizadas */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 max-w-5xl mx-auto"
            >
              {/* Primeira linha - 3 marcas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
                {MARCAS.slice(0, 3).map((marca, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-[#282e76]/30 transition-all duration-300"
                  >
                    <img 
                      src={marca.logo} 
                      alt={marca.alt}
                      className="h-20 lg:h-24 xl:h-28 w-auto object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 drop-shadow-lg opacity-70 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Segunda linha - 2 marcas centralizadas */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-2xl">
                  {MARCAS.slice(3, 5).map((marca, index) => (
                    <motion.div 
                      key={index + 3}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 3) * 0.1 }}
                      className="group flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-[#282e76]/30 transition-all duration-300"
                    >
                      <img 
                        src={marca.logo} 
                        alt={marca.alt}
                        className="h-20 lg:h-24 xl:h-28 w-auto object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 drop-shadow-lg opacity-70 group-hover:opacity-100"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Lojas com Carrossel */}
        <StoresCarouselBrands />
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
