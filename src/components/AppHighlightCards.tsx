
import React from "react";
import { Link } from "react-router-dom";
import { Download, Star, Users, Shield, Smartphone } from "lucide-react";

const APPS = [
  {
    name: "Super App RedeCompras",
    icon: "/grc-uploads/93b64577-c63e-48fe-b09a-0aa165a7f468.png",
    iconBg: "from-[#2545B8] to-[#0d7c3d]",
    iconRing: "ring-[#2545B8]/30",
    description: "Cashback e benefícios exclusivos em todas as suas compras",
    features: ["Cashback instantâneo", "Ofertas exclusivas", "Programa de fidelidade"],
    downloads: "50k+",
    rating: "4.8",
    playStore: "https://play.google.com/store/apps/details?id=br.com.redecompras.rcplus",
    appStore: "#",
    learnMore: "/clube/rc-plus"
  },
  {
    name: "Cliente Arretado",
    icon: "/grc-uploads/ed8adf86-dde9-4369-9d42-eddc2e64f519.png",
    iconBg: "from-yellow-400 to-orange-500",
    iconRing: "ring-yellow-400/30",
    description: "Descontos especiais e promoções exclusivas para nossos clientes",
    features: ["Descontos especiais", "Promoções exclusivas", "Lista de compras inteligente"],
    downloads: "25k+",
    rating: "4.6",
    playStore: "https://play.google.com/store",
    appStore: "#",
    learnMore: "/clube/cliente-arretado"
  }
];

const AppHighlightCards: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#282e76]/10 to-[#0d7c3d]/10 rounded-full border border-[#282e76]/20 mb-6">
            <Smartphone className="w-4 h-4 text-[#0d7c3d]" />
            <span className="text-sm font-semibold text-[#282e76]">Apps Oficiais</span>
          </div>
          
          <h3 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Nossos</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              Aplicativos
            </span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Baixe nossos apps oficiais e tenha acesso a benefícios exclusivos, 
            cashback, promoções e muito mais na palma da sua mão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {APPS.map((app, i) => (
            <div
              key={app.name}
              className="group relative rounded-3xl bg-white/95 backdrop-blur-sm shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            >
              {/* Header com gradiente - altura fixa */}
              <div className={`h-20 bg-gradient-to-r ${app.iconBg} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>

              {/* Conteúdo principal - flex para distribuir espaço */}
              <div className="relative px-8 pb-8 flex-1 flex flex-col">
                {/* Logo central destacada - posição fixa */}
                <div className="flex justify-center -mt-10 mb-6">
                  <div
                    className={`
                      rounded-2xl p-4 shadow-xl border-4 border-white ring-4 ${app.iconRing}
                      bg-gradient-to-br ${app.iconBg}
                      flex items-center justify-center transition-transform group-hover:scale-110
                      w-20 h-20
                    `}
                  >
                    <img
                      src={app.icon}
                      alt={`Logo ${app.name}`}
                      className="w-12 h-12 object-contain drop-shadow-lg"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Nome do app */}
                <h4 className="text-2xl font-bold text-[#282e76] text-center mb-4 group-hover:text-[#0d7c3d] transition-colors">
                  {app.name}
                </h4>

                {/* Stats - altura fixa */}
                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#0d7c3d] mb-1">
                      <Download className="w-4 h-4" />
                      <span className="font-bold text-lg">{app.downloads}</span>
                    </div>
                    <span className="text-xs text-gray-500">Downloads</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#0d7c3d] mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold text-lg">{app.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">Avaliação</span>
                  </div>
                </div>

                {/* Descrição - flex-grow para preencher espaço */}
                <p className="text-center text-gray-700 text-lg font-medium mb-6 leading-relaxed flex-grow">
                  {app.description}
                </p>

                {/* Features - altura fixa */}
                <div className="mb-8">
                  <h5 className="text-sm font-semibold text-gray-800 mb-3 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-[#0d7c3d]" />
                    Principais recursos:
                  </h5>
                  <ul className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 justify-center">
                        <div className="w-1.5 h-1.5 bg-[#0d7c3d] rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botões - sempre no final */}
                <div className="space-y-4 mt-auto">
                  <Link
                    to={app.learnMore}
                    className="block w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                  >
                    Saiba mais sobre o app
                  </Link>
                  
                  <div className="flex gap-3 justify-center">
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform hover:scale-105 transition-transform"
                    >
                      <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                        alt="Disponível no Google Play"
                        className="h-12"
                      />
                    </a>
                    <a
                      href={app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform hover:scale-105 transition-transform"
                    >
                      <img
                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                        alt="Baixar na App Store"
                        className="h-12"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#282e76]/10 to-[#0d7c3d]/10 rounded-3xl border border-[#0d7c3d]/20 backdrop-blur-sm">
          <h4 className="text-2xl font-bold text-[#282e76] mb-4">
            Ainda não tem nossos apps?
          </h4>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Baixe agora e comece a aproveitar todos os benefícios exclusivos para clientes do Grupo RedeCompras!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppHighlightCards;
