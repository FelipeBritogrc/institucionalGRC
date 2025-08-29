
import React from "react";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    year: "2001",
    title: "Fundação como Barateiro",
    description: "Início das atividades com a primeira loja em João Pessoa, focando em preços populares e atendimento diferenciado.",
    icon: "🏪",
    img: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "2007",
    title: "Nascimento do Grupo RedeCompras",
    description: "Rebranding estratégico e expansão das operações, consolidando nossa presença no mercado paraibano.",
    icon: "🔄",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "2012",
    title: "Inauguração BomQuéSó",
    description: "Lançamento do formato atacarejo, revolucionando o conceito de compras em grande escala na região.",
    icon: "🛒",
    img: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "2019",
    title: "E-commerce RedeCompras.com",
    description: "Entrada no mundo digital com nossa plataforma de vendas online, aproximando ainda mais nossos clientes.",
    icon: "🌐",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "2023",
    title: "Expansão Regional",
    description: "Inauguração de novas unidades e modernização das existentes, fortalecendo nossa presença no Nordeste.",
    icon: "📈",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "2024",
    title: "Inovação Contínua",
    description: "Investimentos em tecnologia e sustentabilidade, preparando o grupo para os próximos desafios do varejo.",
    icon: "🚀",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TimelineSection: React.FC = () => {
  return (
    <section id="historia" className="max-w-6xl mx-auto py-12 sm:py-16 px-3 sm:px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#282e76] mb-3 sm:mb-4">
          Nossa História
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Há mais de duas décadas construindo uma história de sucesso no varejo paraibano,
          com foco em inovação, qualidade e compromisso com nossos clientes.
        </p>
      </div>

      <div className="relative">
        {/* Timeline central line - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#282e76]/20" />

        {TIMELINE.map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`relative flex flex-col lg:flex-row items-center mb-8 sm:mb-12 ${
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Timeline dot - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#282e76]" />

            {/* Content */}
            <div className={`w-full lg:w-1/2 ${idx % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <span className="inline-block text-2xl sm:text-3xl mb-2">{item.icon}</span>
                <div className="text-[#282e76] font-bold text-xl sm:text-2xl mb-2">{item.year}</div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{item.description}</p>
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
