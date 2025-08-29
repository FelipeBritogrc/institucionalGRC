import React from "react";
import { Building, Zap, Cpu, ShoppingCart, ScanLine } from "lucide-react";
import { motion } from "framer-motion";

const MARCAS = [
  {
    name: "RedeCompras",
    logo: "/grc-uploads/e38487f3-74ff-4c9f-84f5-4b97dd98155e.png",
    alt: "RedeCompras",
  },
  {
    name: "BomQuéSó",
    logo: "/grc-uploads/1206498b-69b8-45e5-9d8d-f1f40e2060a3.png",
    alt: "BomQuéSó",
  },
  {
    name: "Campina Atacado",
    logo: "/grc-uploads/8a1270cd-9a4e-477e-830f-7e2ff293c73e.png",
    alt: "Campina Atacado",
  },
  {
    name: "CDRC",
    logo: "/grc-uploads/e40be2ba-fc99-4a19-9cc4-33d754ad83c8.png",
    alt: "CDRC",
  },
  {
    name: "Leal",
    logo: "/grc-uploads/e1d4062b-70fe-4c4d-8dd3-9d3827420f79.png",
    alt: "Leal",
  },
];

const BrandsSectionRedesigned = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/20 to-[#0d7c3d]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/20 to-[#282e76]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#282e76]/20 rounded-full shadow-lg mb-8">
            <Building className="w-5 h-5 text-[#282e76]" />
            <span className="text-sm font-bold text-[#282e76] uppercase tracking-wider">
              Portfolio de Marcas
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#282e76]">
            Nossas marcas
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] mx-auto mb-6" />

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Um verdadeiro ecossistema de negócios. Sempre pensando no cliente,
            com diferentes formatos.
          </p>
        </motion.div>

        {/* Brands Layout - 3 em cima, 2 embaixo centralizadas */}
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

        {/* Seção de Inovação Tecnológica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          {/* Header da seção */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0d7c3d]/10 to-[#282e76]/10 border-2 border-[#0d7c3d]/20 rounded-full shadow-lg mb-8">
              <Zap className="w-5 h-5 text-[#0d7c3d]" />
              <span className="text-sm font-bold text-[#0d7c3d] uppercase tracking-wider">
                Tecnologia de Ponta
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-[#282e76] mb-6">
              Pioneirismo em Inovação Tecnológica no Varejo
            </h3>

            <div className="w-24 h-1 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] mx-auto mb-6" />
          </div>

          {/* Grid de inovações */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Self-Checkouts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#0d7c3d]/20 hover:border-[#0d7c3d]/40 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#0d7c3d] to-[#059669] rounded-2xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                <ScanLine className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-base font-bold text-[#282e76] mb-2">
                Self-Checkouts
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Pioneiros no varejo regional, fomos a primeira empresa a
                implantar self-checkouts, promovendo uma experiência de compra
                mais moderna, com mais
                <strong className="text-[#0d7c3d]"> agilidade</strong>,
                <strong className="text-[#0d7c3d]"> autonomia</strong> e
                praticidade para os nossos clientes.
              </p>
            </motion.div>

            {/* E-commerce */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#282e76]/20 hover:border-[#282e76]/40 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#282e76] to-[#1e2563] rounded-2xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#282e76] mb-4">
                E-commerce RedeCompras.com
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Fomos o{" "}
                <strong className="text-[#282e76]">
                  primeiro supermercado de Campina Grande
                </strong>{" "}
                a lançar seu próprio site de e-commerce, ainda em 2016. Essa iniciativa
                pioneira posicionou o{" "}
                <strong className="text-[#282e76]">RedeCompras.com</strong> como
                referência em inovação no varejo regional. Hoje, nossa
                plataforma oferece a mesma qualidade e preços competitivos das
                lojas físicas, com a
                <strong className="text-[#282e76]">
                  {" "}
                  comodidade de comprar de casa
                </strong>{" "}
                e entrega ágil em toda a região.
              </p>
            </motion.div>

            {/* Self Lane */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="group bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#0d7c3d]/20 hover:border-[#0d7c3d]/40 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#059669] to-[#0d7c3d] rounded-2xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#282e76] mb-4">
                Self Lane
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Seguimos na vanguarda implementando o{" "}
                <strong className="text-[#0d7c3d]">Self Lane</strong>, uma
                tecnologia de última geração que eleva ainda mais o nível da
                experiência no autoatendimento, garantindo{" "}
                <strong className="text-[#0d7c3d]">
                  praticidade, velocidade e satisfação
                </strong>
                .
              </p>
            </motion.div>
          </div>

          {/* Call to action final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#282e76]/10 via-[#0d7c3d]/5 to-[#282e76]/10 backdrop-blur-sm rounded-3xl border-2 border-[#0d7c3d]/20 p-8 lg:p-12 shadow-xl">
              <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
                O Futuro do Varejo
              </h4>
              <p className="text-xl text-[#0d7c3d] font-semibold">
                Nosso foco está sempre no futuro do varejo – e ele começa agora.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSectionRedesigned;
