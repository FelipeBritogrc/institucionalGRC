
import React from "react";
import { Users, Store, Award, TrendingUp, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  {
    number: "2ª",
    label: "Maior empresa de varejo da Paraíba",
    icon: Award,
    color: "from-amber-500 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
    description: "Reconhecimento pelo nosso crescimento e qualidade no mercado",
    source: {
      text: "Fonte: Revista SuperHiper - Ranking ABRAS 2025",
      url: "https://www.abras.com.br/edicoes-anteriores/Main.php?MagNo=313#page/170"
    }
  },
  {
    number: "+1200",
    label: "Funcionários",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    description: "Pessoas dedicadas ao nosso sucesso conjunto"
  },
  {
    number: "9",
    label: "Lojas",
    icon: Store,
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-50 to-green-50",
    description: "Pontos de venda estrategicamente localizados"
  }
];

const CompanyNumbers: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(40,46,118,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(13,124,61,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#0d7c3d] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#282e76] rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#0d7c3d] rounded-full animate-pulse opacity-50" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-xl mb-8">
            <TrendingUp className="w-5 h-5 text-[#0d7c3d]" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Nossos Resultados</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white">
            Números que
            <br />
            <span className="bg-gradient-to-r from-[#0d7c3d] via-emerald-400 to-[#0d7c3d] bg-clip-text text-transparent">
              Impressionam
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#0d7c3d] to-emerald-400 mx-auto mb-8 rounded-full" />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Décadas de crescimento sólido e conquistas que nos consolidam como referência no varejo paraibano
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 hover:-translate-y-2 transform-gpu overflow-hidden">
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-50`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.8),transparent_70%)]" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Number */}
                  <div className={`text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-lg leading-relaxed mb-4">
                    {stat.description}
                  </p>

                  {/* Source Link (only for first card) */}
                  {stat.source && (
                    <div className="text-xs text-slate-500 bg-slate-100/80 px-3 py-2 rounded-lg">
                      <a 
                        href={stat.source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-slate-700 transition-colors"
                      >
                        🏆 {stat.source.text}
                      </a>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-10 lg:p-16 shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Calendar className="w-8 h-8 text-[#0d7c3d]" />
              <MapPin className="w-8 h-8 text-[#0d7c3d]" />
              <TrendingUp className="w-8 h-8 text-[#0d7c3d]" />
            </div>
            
            <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Mais de 35 Anos de História
            </h4>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada número representa nosso compromisso com a excelência, inovação e 
              o desenvolvimento sustentável da Paraíba. Nossa jornada continua crescendo 
              junto com nossos clientes e comunidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyNumbers;
