
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Download, CheckCircle, ArrowRight } from "lucide-react";

const APPS_DATA = [
  {
    id: "cliente-arretado",
    name: "Cliente Arretado Bomquesó",
    icon: "/grc-uploads/ed8adf86-dde9-4369-9d42-eddc2e64f519.png",
    description: "Descontos especiais e promoções exclusivas para nossos clientes fiéis.",
    benefits: [
      "Descontos especiais em produtos selecionados",
      "Promoções exclusivas para usuários do app",
      "Lista de compras inteligente e organizada",
      "Localização das lojas mais próximas"
    ],
    howItWorks: [
      "Baixe o aplicativo gratuitamente",
      "Crie sua conta ou faça login",
      "Navegue pelas ofertas exclusivas",
      "Adicione produtos à sua lista de compras",
      "Finalize suas compras na loja e economize"
    ],
    playStoreUrl: "https://play.google.com/store",
    appStoreUrl: "https://apps.apple.com"
  },
  {
    id: "clube-rc-plus",
    name: "Super App RedeCompras",
    icon: "/grc-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    description: "Programa de fidelidade exclusivo com cashback e vantagens especiais.",
    benefits: [
      "Cashback instantâneo em compras",
      "Desconto progressivo por fidelidade",
      "Aniversariante do mês com vantagens especiais",
      "Acesso antecipado a promoções"
    ],
    howItWorks: [
      "Cadastre-se no Clube RC+",
      "Acumule pontos a cada compra realizada",
      "Troque pontos por descontos exclusivos",
      "Aproveite ofertas personalizadas",
      "Receba cashback direto em sua conta"
    ],
    playStoreUrl: "https://play.google.com/store",
    appStoreUrl: "https://apps.apple.com"
  }
];

const Apps: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-14 sm:pt-16">
        {/* Header Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#282e76] via-[#1e2563] to-[#0d4a6b] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0d7c3d] rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Smartphone className="w-4 h-4 text-[#0d7c3d]" />
                <span className="text-sm font-semibold text-white">Aplicativos Oficiais</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Nossos <span className="text-[#0d7c3d]">Aplicativos</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Baixe nossos aplicativos oficiais e tenha acesso a ofertas exclusivas, 
                programa de fidelidade e muito mais na palma da sua mão.
              </p>
            </div>
          </div>
        </section>

        {/* Apps Sections */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {APPS_DATA.map((app, index) => (
                <div
                  key={app.id}
                  className={`relative overflow-hidden rounded-3xl border border-gray-200/50 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-white to-blue-50/30' 
                      : 'bg-gradient-to-br from-gray-50/50 to-green-50/30'
                  }`}
                >
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-10 right-10 w-32 h-32 ${
                      index % 2 === 0 ? 'bg-[#282e76]' : 'bg-[#0d7c3d]'
                    } rounded-full blur-2xl`} />
                  </div>

                  <div className="relative p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* App Info */}
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border-4 border-white ring-4 ring-black/5 flex items-center justify-center overflow-hidden">
                            <img 
                              src={app.icon} 
                              alt={app.name}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                          <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#282e76]">
                              {app.name}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {app.description}
                            </p>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-[#282e76] mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#0d7c3d]" />
                            Principais Benefícios
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {app.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#0d7c3d] rounded-full flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* How it Works */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-[#282e76] mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5 text-[#0d7c3d]" />
                            Como Funciona
                          </h3>
                          <ol className="space-y-2">
                            {app.howItWorks.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-6 h-6 bg-[#0d7c3d] text-white text-sm rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                                  {idx + 1}
                                </span>
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {/* Download Section */}
                      <div className="lg:col-span-5">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/50 shadow-lg">
                          <div className="text-center mb-6">
                            <Download className="w-12 h-12 text-[#0d7c3d] mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-[#282e76] mb-2">
                              Baixe Agora
                            </h3>
                            <p className="text-gray-600">
                              Disponível gratuitamente para Android e iOS
                            </p>
                          </div>

                          <div className="space-y-4">
                            <a
                              href={app.playStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full transform hover:scale-105 transition-transform"
                            >
                              <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                                alt="Disponível no Google Play"
                                className="w-full max-w-[200px] mx-auto"
                              />
                            </a>
                            
                            <a
                              href={app.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full transform hover:scale-105 transition-transform"
                            >
                              <img
                                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                alt="Baixar na App Store"
                                className="w-full max-w-[200px] mx-auto"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#282e76]/5 via-white/50 to-[#0d7c3d]/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282e76] mb-4">
              Transforme sua Experiência de Compras
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Com nossos aplicativos, você tem acesso a um mundo de vantagens exclusivas, 
              ofertas especiais e a comodidade de ter tudo na palma da sua mão.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Apps;
