
import React from "react";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsCard from "@/components/NewsCard";
import { NewsSkeletons } from "./NewsSkeletons";
import { NewsItem } from "@/types";

interface NewsResultsProps {
  paginatedNews: NewsItem[];
  filteredNews: NewsItem[];
  currentPage: number;
  isLoading: boolean;
  onClearFilters: () => void;
}

export const NewsResults: React.FC<NewsResultsProps> = ({
  paginatedNews,
  filteredNews,
  currentPage,
  isLoading,
  onClearFilters
}) => {
  if (!!isLoading) {
    return <NewsSkeletons />;
  }

  if (filteredNews.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-5xl mb-3">📰</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma notícia encontrada</h3>
        <p className="text-gray-600 mb-4">
          Tente ajustar seus filtros ou fazer uma nova busca.
        </p>
        <Button onClick={onClearFilters} className="bg-[#282e76] hover:bg-[#0d7c3d]">
          Limpar Filtros
        </Button>
      </div>
    );
  }

  return (
    <div className="max-h-[80vh] overflow-y-auto">
      {/* Featured News (first item on first page) - Reduced spacing */}
      {currentPage === 1 && paginatedNews.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#0d7c3d]" />
            <h2 className="text-xl lg:text-2xl font-bold text-[#282e76]">
              Notícia em Destaque
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
            <div className="max-h-[40vh] overflow-hidden">
              <NewsCard
                key={paginatedNews[0].id}
                id={paginatedNews[0].id}
                title={paginatedNews[0].title}
                img={paginatedNews[0].img}
                summary={paginatedNews[0].summary}
                date={paginatedNews[0].date}
                category={paginatedNews[0].category || "Notícias"}
              />
            </div>
          </div>
        </div>
      )}

      {/* All News Grid - Optimized spacing */}
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-[#282e76] mb-4">
          {currentPage === 1 && paginatedNews.length > 1 ? "Outras Notícias" : "Notícias"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(currentPage === 1 ? paginatedNews.slice(1) : paginatedNews).map((noticia) => (
            <div key={noticia.id} className="max-h-[35vh] overflow-hidden">
              <NewsCard
                id={noticia.id}
                title={noticia.title}
                img={noticia.img}
                summary={noticia.summary}
                date={noticia.date}
                category={noticia.category || "Notícias"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
