import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InlineLink from "@/components/InlineLink";
import React, { useEffect } from "react";
import { Calendar, ArrowLeft, Clock, User } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { NEWS_DATA } from "@/data/news";

const NoticiaDetalhada = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticia = NEWS_DATA.find(item => item.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleBackClick = () => {
    navigate('/', { replace: true });
    // Scroll suave para a seção de notícias
    setTimeout(() => {
      const newsSection = document.getElementById('noticias');
      if (newsSection) {
        newsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!noticia) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col justify-center items-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-2">Notícia não encontrada</h2>
            <button onClick={handleBackClick} className="text-[#0d7c3d] font-semibold mt-2 hover:underline">
              Voltar para Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Function to render content with inline links
  const renderContentWithLinks = (content: string) => {
    const parts = content.split(/(<InlineLink[^>]*>.*?<\/InlineLink>)/);
    
    return parts.map((part, index) => {
      if (part.includes('<InlineLink')) {
        const hrefMatch = part.match(/href="([^"]*)"/);
        const textMatch = part.match(/>([^<]*)</);
        
        if (hrefMatch && textMatch) {
          return (
            <InlineLink key={index} href={hrefMatch[1]}>
              {textMatch[1]}
            </InlineLink>
          );
        }
      }
      return part;
    });
  };

  // Use detailImg if available, otherwise fallback to img
  const imageToShow = (noticia as any).detailImg || noticia.img;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-[#282e76] hover:text-[#0d7c3d] font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Home
          </button>
        </div>

        {/* Article */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
          {/* Article Meta */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {noticia.date}
              </div>
              {noticia.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {noticia.readTime} de leitura
                </div>
              )}
              {noticia.author && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {noticia.author}
                </div>
              )}
              <div className="px-3 py-1 bg-[#282e76]/10 text-[#282e76] text-xs font-bold rounded-full">
                {noticia.category}
              </div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282e76] mb-4 leading-tight">
              {noticia.title}
            </h1>
            {noticia.subtitle && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {noticia.subtitle}
              </p>
            )}
          </header>

          {/* Featured Image with consistent aspect ratio */}
          <div className="mb-8">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <AspectRatio ratio={16/9} className="bg-gray-100">
                <img 
                  src={imageToShow} 
                  alt={noticia.title} 
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{ 
                    objectPosition: 'center',
                    minHeight: '400px'
                  }}
                />
              </AspectRatio>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {noticia.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {renderContentWithLinks(paragraph)}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhada;
