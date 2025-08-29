
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { HISTORICAL_NEWS } from "@/data/newsArchive";
import { ArrowLeft, Archive, Calendar } from "lucide-react";

const NewsHistory = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#282e76]/20 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-[#0d7c3d]/20 to-transparent rounded-full blur-xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Back Button */}
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-[#282e76] hover:text-[#0d7c3d] font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para Página Inicial
              </Link>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#282e76]/10 to-[#0d7c3d]/10 rounded-full border border-[#282e76]/20 mb-6">
                <Archive className="w-4 h-4 text-[#0d7c3d]" />
                <span className="text-sm font-semibold text-[#282e76]">Arquivo Histórico</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block text-gray-900 mb-2">Histórico de</span>
                <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
                  Notícias
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Reviva as conquistas, eventos e marcos importantes da história do Grupo RedeCompras.
              </p>
            </div>
          </div>
        </section>

        {/* Historical News Content */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4">
            {HISTORICAL_NEWS.length > 0 ? (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-6 h-6 text-[#0d7c3d]" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#282e76]">
                    Notícias Anteriores ({HISTORICAL_NEWS.length})
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {HISTORICAL_NEWS.map((noticia) => (
                     <NewsCard
                       key={noticia.id}
                       id={noticia.id}
                       title={noticia.title}
                       img={noticia.img}
                       summary={noticia.summary}
                       date={noticia.date}
                       category={noticia.category || "Histórico"}
                     />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="text-gray-400 text-6xl mb-4">📰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhuma notícia no histórico</h3>
                <p className="text-gray-600 mb-6">
                  O histórico de notícias será preenchido conforme novas notícias forem adicionadas.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#282e76] hover:bg-[#0d7c3d] text-white rounded-lg font-semibold transition-colors"
                >
                  Ver Notícias Atuais
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsHistory;
