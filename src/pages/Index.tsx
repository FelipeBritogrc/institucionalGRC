import React, { memo } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import Navbar from "@/components/Navbar";
import HeroInstitutional from "@/components/HeroInstitutional";
import ValueCardsRedesigned from "@/components/ValueCardsRedesigned";
import TimelineCarousel from "@/components/TimelineCarousel";
import BrandsSectionRedesigned from "@/components/BrandsSectionRedesigned";
import CompanyNumbers from "@/components/CompanyNumbers";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";

// Componente de seção com animação otimizada
const AnimatedSection = memo(({ 
  id, 
  className = "relative", 
  children 
}: { 
  id: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const { elementRef, shouldAnimate } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={elementRef}
      id={id}
      className={`${className} ${shouldAnimate ? 'animate-fade-in' : ''}`}
    >
      {children}
    </section>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

const Index = memo(() => {

  return (
    <ErrorBoundary>
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex flex-col scroll-smooth overflow-x-hidden max-w-full">
        <Navbar />
        <main className="flex-1 flex flex-col pt-14 sm:pt-16">
          {/* Hero Section */}
          <AnimatedSection id="home">
            <div className="absolute inset-0 bg-gradient-to-br from-[#282e76]/5 via-transparent to-[#0d7c3d]/5 pointer-events-none" />
            <HeroInstitutional />
          </AnimatedSection>

          {/* Missão, Visão e Valores */}
          <AnimatedSection id="valores">
            <ValueCardsRedesigned />
          </AnimatedSection>

          {/* Últimas Notícias - Seção otimizada com menos padding */}
          <AnimatedSection id="noticias" className="relative py-4">
            <NewsSection />
          </AnimatedSection>

          {/* Nossa Trajetória */}
          <AnimatedSection id="historia">
            <TimelineCarousel />
          </AnimatedSection>

          {/* Família de Marcas */}
          <AnimatedSection id="marcas">
            <BrandsSectionRedesigned />
          </AnimatedSection>

          {/* Nossos Números */}
          <AnimatedSection id="numeros">
            <CompanyNumbers />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
});

Index.displayName = 'Index';

export default Index;
