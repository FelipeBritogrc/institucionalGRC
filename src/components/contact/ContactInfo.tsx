
import React from "react";
import { Clock, MapPin, Phone, Mail, Navigation } from "lucide-react";

const ContactInfo: React.FC = () => {
  const handleAddressClick = () => {
    const address = "R. Cel. João Lourenço Porto, 374, Centro, Campina Grande - PB, 58400-240";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="relative">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/20 to-[#0d7c3d]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/20 to-[#282e76]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#282e76] mb-4">
            Informações de Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todas as formas de entrar em contato com o Grupo RedeCompras
          </p>
        </div>
        
        {/* Contact Information Grid */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Horário de Atendimento */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8 border-b border-gray-200">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#282e76] to-[#0d7c3d] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-[#282e76] mb-3">Horário de Atendimento</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-semibold text-[#282e76] mb-1">Segunda a Sábado</p>
                  <p className="text-lg">07:00 às 22:00</p>
                </div>
                <div>
                  <p className="font-semibold text-[#282e76] mb-1">Domingo</p>
                  <p className="text-lg">07:00 às 20:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Endereço */}
          <div 
            className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8 border-b border-gray-200 cursor-pointer group"
            onClick={handleAddressClick}
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d7c3d] to-[#282e76] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-[#282e76] mb-3">Endereço</h3>
              <div className="text-gray-600 space-y-1">
                <p className="text-lg">R. Cel. João Lourenço Porto, 374</p>
                <p className="text-lg">Centro - Campina Grande/PB</p>
                <p className="text-lg">CEP: 58400-240</p>
                <div className="flex items-center gap-2 mt-3 text-[#0d7c3d] font-semibold group-hover:text-[#059669] transition-colors">
                  <Navigation className="h-5 w-5" />
                  <span>Clique para abrir no Maps</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Telefone */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8 border-b border-gray-200 group">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#282e76] to-[#0d7c3d] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-[#282e76] mb-3">Telefone</h3>
              <div className="text-gray-600">
                <p className="text-3xl font-bold text-[#0d7c3d] mb-2">(83) 2102-5300</p>
                <p className="text-lg">Central de Atendimento</p>
              </div>
            </div>
          </div>
          
          {/* E-mail */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8 group">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d7c3d] to-[#282e76] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-[#282e76] mb-3">E-mail</h3>
              <div className="space-y-2">
                <p>
                  <a href="mailto:contato@gruporedecompras.com" className="text-[#0d7c3d] hover:text-[#059669] font-semibold text-lg transition-colors underline decoration-2 underline-offset-4">
                    contato@gruporedecompras.com
                  </a>
                </p>
                <p>
                  <a href="mailto:sac@gruporedecompras.com" className="text-[#0d7c3d] hover:text-[#059669] font-semibold text-lg transition-colors underline decoration-2 underline-offset-4">
                    sac@gruporedecompras.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-[#282e76]/10 via-white/50 to-[#0d7c3d]/10 backdrop-blur-sm rounded-3xl border-2 border-[#282e76]/20 p-8 lg:p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
              Atendimento de Emergência
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Para situações urgentes fora do horário comercial
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] rounded-xl text-white font-semibold shadow-lg">
              <Phone className="h-5 w-5" />
              <span className="text-lg">WhatsApp: (83) 9 3087-7764</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
