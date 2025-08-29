
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  img: string;
  summary: string;
  date: string;
  readTime?: string;
  category: string;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  id, 
  title, 
  img, 
  summary, 
  date, 
  readTime, 
  category, 
  featured = false 
}) => {
  return (
    <article className={`
      w-full ${featured ? 'max-w-4xl' : 'max-w-md'} mx-auto
    `}>
      <Link to={`/noticias/${id}`} className="block">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          {/* Image Section - 1200x675 dimensions (16:9 aspect ratio) */}
          <div className="relative overflow-hidden">
            <div className="w-full aspect-[16/9]">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                width="1200"
                height="675"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="bg-gradient-to-r from-[#282e76] to-[#0d7c3d] text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg font-bold text-xs shadow-lg">
                {category}
              </span>
            </div>
            
            {/* Read more overlay for featured */}
            {featured && (
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[#282e76] font-bold text-xs">
                  <span>Leia mais</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5">
            <h3 className={`font-bold text-[#282e76] mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#0d7c3d] transition-colors duration-300 ${
              featured ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}>
              {title}
            </h3>
            
            <p className={`text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-2 ${
              featured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
            }`}>
              {summary}
            </p>
            
            {/* Meta information */}
            <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#0d7c3d] rounded-full" />
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
              {readTime && (
                <>
                  <div className="h-3 w-px bg-gray-300" />
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{readTime}</span>
                  </div>
                </>
              )}
              {!featured && (
                <>
                  <div className="h-3 w-px bg-gray-300" />
                  <div className="flex items-center gap-1 text-[#0d7c3d] font-bold group-hover:gap-2 transition-all duration-300">
                    <span>Leia mais</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
