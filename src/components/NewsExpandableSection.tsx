
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Newspaper, Plus, Minus, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NEWS_DATA } from "@/data/news";

const NewsExpandableSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const mainNews = NEWS_DATA.slice(0, 3);
  const extraNews = NEWS_DATA.slice(3);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <section id="noticias" className="w-full py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #282e76 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#282e76]/20 rounded-full shadow-lg mb-8">
            <div className="w-2 h-2 bg-[#0d7c3d] rounded-full animate-pulse" />
            <Newspaper className="w-5 h-5 text-[#282e76]" />
            <span className="text-sm font-bold text-[#282e76] uppercase tracking-wider">Centro de Notícias</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#282e76]">
            Últimas Notícias
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] mx-auto mb-6" />
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Acompanhe as novidades, conquistas e eventos do Grupo RedeCompras
          </p>
        </motion.div>
        
        {/* Main News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="lg:col-span-8"
          >
            <Link 
              to={`/noticias/${mainNews[0]?.id}`}
              onClick={handleLinkClick}
              className="group block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 transform-gpu h-full"
            >
              {/* Image Container with proper aspect ratio */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/9]">
                  <img 
                    src={mainNews[0]?.img} 
                    alt={mainNews[0]?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-[#282e76]/90 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/20 shadow-lg">
                    {mainNews[0]?.category}
                  </span>
                </div>

                {/* Featured Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 text-white/90 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {mainNews[0]?.date}
                    {mainNews[0]?.readTime && (
                      <>
                        <div className="w-1 h-1 bg-white/60 rounded-full" />
                        <Clock className="w-4 h-4" />
                        {mainNews[0]?.readTime}
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {mainNews[0]?.title}
                  </h3>
                  <p className="text-white/90 text-base line-clamp-3 leading-relaxed">
                    {mainNews[0]?.summary}
                  </p>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Secondary Articles */}
          <div className="lg:col-span-4 space-y-6">
            {mainNews.slice(1, 3).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.15 }}
              >
                <Link 
                  to={`/noticias/${news.id}`}
                  onClick={handleLinkClick}
                  className="group block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 transform-gpu h-full"
                >
                  {/* Image Container with proper aspect ratio */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/9]">
                      <img 
                        src={news.img} 
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#282e76]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                      {news.readTime && (
                        <>
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          <Clock className="w-3 h-3" />
                          {news.readTime}
                        </>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#282e76] mb-2 group-hover:text-[#0d7c3d] transition-colors leading-tight line-clamp-2">
                      {news.title}
                    </h3>
                    
                    {/* Summary */}
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-3">
                      {news.summary}
                    </p>
                    
                    {/* Read More */}
                    <div className="flex items-center gap-2 text-[#0d7c3d] font-bold text-sm group-hover:gap-3 transition-all">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        {extraNews.length > 0 && (
          <div className="text-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white rounded-full font-bold transition-all duration-300 transform shadow-xl hover:shadow-2xl"
            >
              {isExpanded ? (
                <>
                  <Minus className="w-5 h-5" />
                  Ver Menos Notícias
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Ver Todas as Notícias ({extraNews.length} mais)
                </>
              )}
            </motion.button>
          </div>
        )}

        {/* Extra News Grid */}
        <AnimatePresence>
          {isExpanded && extraNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {extraNews.map((news, index) => (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={`/noticias/${news.id}`}
                      onClick={handleLinkClick}
                      className="group block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 transform-gpu h-full"
                    >
                      {/* Image with proper aspect ratio */}
                      <div className="relative overflow-hidden">
                        <div className="aspect-[16/9]">
                          <img 
                            src={news.img} 
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#282e76]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20">
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
                        <h3 className="text-lg font-bold text-[#282e76] mb-3 group-hover:text-[#0d7c3d] transition-colors leading-tight">
                          {news.title}
                        </h3>
                        
                        {/* Summary */}
                        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4">
                          {news.summary}
                        </p>
                        
                        {/* Read More */}
                        <div className="flex items-center gap-2 text-[#0d7c3d] font-bold text-sm group-hover:gap-3 transition-all">
                          <span>Saiba mais</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsExpandableSection;
