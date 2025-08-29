
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Users, Building, Heart } from "lucide-react";

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2545B8] to-[#282e76] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trabalhe Conosco
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Faça parte de uma empresa que valoriza pessoas e constrói o futuro do varejo paraibano
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Building className="w-4 h-4" />
                <span>Ambiente colaborativo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>Crescimento profissional</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4" />
                <span>Valorização das pessoas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Company Description */}
            <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 lg:p-16 mb-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2545B8] mb-6">
                  REDECOMPRAS SUPERMERCADOS
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#2545B8] to-[#0d7c3d] mx-auto rounded-full mb-8"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0d7c3d] mb-8">
                  O mais lembrado de Campina!
                </h3>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl">
                  O Rede Compras Supermercados traz em sua essência o servir com excelência! 
                  Acreditamos que o segredo para o alcance da nossa visão (ser reconhecido como a melhor empresa varejista do estado) é o atendimento de qualidade.
                </p>

                <p className="text-xl">
                  Para isto, queremos a colaboração de pessoas que estejam preparadas e dispostas ao servir! Afinal, nossa origem vem de bases simples e profundas da dedicação constante ao trabalho e às pessoas, pois este, sem dúvida, é o nosso diferencial em um ramo de ampla concorrência.
                </p>

                <p className="text-xl">
                  No RC você vai encontrar um ambiente dinâmico, intenso, colaborativo e repleto de oportunidades para seu crescimento pessoal e profissional.
                </p>

                <p className="text-xl font-semibold text-[#2545B8]">
                  Se você quer trabalhar com dedicação e empenho em uma empresa que é movida por realizações e resultados, o seu lugar é com a gente!
                </p>

                <div className="text-center mt-12">
                  <p className="text-2xl font-bold text-[#0d7c3d] mb-8">
                    Vem ser #SouGRC!
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#2545B8]/5 to-[#0d7c3d]/5 rounded-3xl p-8 sm:p-12 border border-[#2545B8]/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2545B8] mb-6">
                  Pronto para fazer parte do nosso time?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Descubra as oportunidades disponíveis e candidate-se através da nossa plataforma oficial de recrutamento.
                </p>
                <a
                  href="https://gruporedecompras.vagas.solides.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2545B8] text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-[#19317C] focus:ring-4 focus:ring-[#2545B8]/30 transition-all transform hover:scale-105 shadow-lg"
                >
                  Confira nossas vagas abertas aqui
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
