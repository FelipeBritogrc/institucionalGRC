
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Newspaper, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const NEWS = [
  {
    id: "1",
    title: "21 Anos de História",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Celebrando mais de duas décadas de crescimento e inovação no varejo.",
    date: "15/03/2024",
    category: "Empresa"
  },
  {
    id: "2",
    title: "Nova Loja em Manaíra",
    img: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Inauguração da mais nova unidade do Grupo RedeCompras na região de Manaíra.",
    date: "10/03/2024",
    category: "Expansão"
  },
  {
    id: "3",
    title: "Corrida Saudável 2024",
    img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Evento reuniu colaboradores e comunidade em prol da saúde e bem-estar.",
    date: "01/03/2024",
    category: "Eventos"
  }
];

const NewsletterSectionRedesigned: React.FC = () => {
  const handleNewsletterClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#282e76]/10 to-[#0d7c3d]/10 rounded-full border border-[#282e76]/20 mb-6">
            <Newspaper className="w-4 h-4 text-[#0d7c3d]" />
            <span className="text-sm font-semibold text-[#282e76]">Centro de Notícias</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Últimas</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              Notícias
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acompanhe as novidades, conquistas e eventos do Grupo RedeCompras.
          </p>
        </motion.div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {NEWS.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Link 
                to={`/noticias/${news.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3 transform-gpu"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={news.img} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#282e76] text-xs font-semibold rounded-full border border-white/50">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#282e76] mb-3 group-hover:text-[#0d7c3d] transition-colors leading-tight">
                    {news.title}
                  </h3>
                  
                  {/* Summary */}
                  <p className="text-gray-600 text-base line-clamp-2 leading-relaxed mb-4">
                    {news.summary}
                  </p>
                  
                  {/* Read More */}
                  <div className="flex items-center gap-2 text-[#0d7c3d] font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to see all news */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#282e76]/5 via-white/50 to-[#0d7c3d]/5 rounded-3xl border border-[#0d7c3d]/20 p-8 lg:p-12 backdrop-blur-sm">
            <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
              Acompanhe todas as nossas notícias
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Visite nosso centro de notícias para ficar sempre atualizado com as últimas novidades do Grupo RedeCompras.
            </p>
            <Link
              to="/noticias/historico"
              onClick={handleNewsletterClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#282e76] hover:bg-[#0d7c3d] text-white rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="w-5 h-5" />
              Ver Todas as Notícias
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSectionRedesigned;
