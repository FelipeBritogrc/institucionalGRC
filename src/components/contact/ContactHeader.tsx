
import React from "react";
import { MessageSquare, Phone, Mail } from "lucide-react";

const ContactHeader: React.FC = () => {
  return (
    <section className="text-center relative">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#282e76]/30 to-[#0d7c3d]/30 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-[#0d7c3d]/30 to-[#282e76]/30 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#282e76]/20 rounded-full shadow-lg mb-8">
          <MessageSquare className="h-5 w-5 text-[#282e76]" />
          <span className="text-sm font-bold text-[#282e76] uppercase tracking-wider">Atendimento</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#282e76] mb-6">
          Fale Conosco
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] mx-auto mb-6" />
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Estamos aqui para atendê-lo! Entre em contato conosco através de nossos canais de atendimento
        </p>

        {/* Quick Contact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#282e76] to-[#0d7c3d] rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-[#282e76] mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm">Atendimento rápido e direto</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d7c3d] to-[#282e76] rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-[#282e76] mb-2">Telefone</h3>
            <p className="text-gray-600 text-sm">Atendimento especializado</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#282e76] to-[#0d7c3d] rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-[#282e76] mb-2">E-mail</h3>
            <p className="text-gray-600 text-sm">Suporte completo por escrito</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
