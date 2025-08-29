
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

// Lazy load pages para melhor performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Careers = lazy(() => import("./pages/Careers"));
const Ethics = lazy(() => import("./pages/Ethics"));
const Contact = lazy(() => import("./pages/Contact"));
const ClubePage = lazy(() => import("./pages/ClubePage"));
const History = lazy(() => import("./pages/History"));
const NoticiaDetalhada = lazy(() => import("./pages/NoticiaDetalhada"));
const Brands = lazy(() => import("./pages/Brands"));
const Apps = lazy(() => import("./pages/Apps"));
const NewsHistory = lazy(() => import("./pages/NewsHistory"));

// Configuração otimizada do QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Componente de loading personalizado
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div className="text-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600">Carregando página...</p>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/ethics" element={<Ethics />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/clube/:id" element={<ClubePage />} />
              <Route path="/history" element={<History />} />
              <Route path="/noticias/:id" element={<NoticiaDetalhada />} />
              <Route path="/noticias/historico" element={<NewsHistory />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
