
import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/redecompras/", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png" },
  { label: "Facebook", href: "https://www.facebook.com/RedeCompras?rdid=amLHcrpPDgR0Dqp8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cbu9W5ipR%2F#", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384053.png" },
];

const Footer: React.FC = () => (
  <footer className="bg-[#1a1f4a] border-t border-[#282e76] py-12 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="md:col-span-1">
          <img
            src="/grc-uploads/804139f1-92c9-4df5-8437-fd9f2bb21816.png"
            alt="Grupo RedeCompras"
            className="h-12 mb-4 max-h-[48px]"
            style={{ height: "48px", objectFit: "contain" }}
          />
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Há mais de 35 anos transformando o varejo paraibano com excelência, 
            inovação e compromisso com nossos clientes, colaboradores e comunidade.
          </p>
          <div className="text-xs text-gray-400 bg-[#282e76]/20 px-3 py-2 rounded-lg">
            <a 
              href="https://www.abras.com.br/edicoes-anteriores/Main.php?MagNo=313#page/170" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              🏆 2ª maior empresa de varejo da Paraíba
              <br />
              <span className="text-gray-500">Fonte: Revista SuperHiper - Ranking ABRAS 2025</span>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contato</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start">
              <MapPin className="h-4 w-4 mr-3 text-[#0d7c3d] flex-shrink-0 mt-0.5" />
              <div>
                <p>R. Cel. João Lourenço Porto, 374</p>
                <p>Centro, Campina Grande - PB</p>
                <p>CEP: 58400-240</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-[#0d7c3d] flex-shrink-0" />
              <span>(83) 2102-5300</span>
            </div>
            <Link 
              to="/contact" 
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <MessageSquare className="h-4 w-4 mr-3 text-[#0d7c3d] flex-shrink-0" />
              <span className="hover:underline">Fale Conosco via WhatsApp</span>
            </Link>
            <div className="flex items-start">
              <Clock className="h-4 w-4 mr-3 text-[#0d7c3d] flex-shrink-0 mt-0.5" />
              <div>
                <p>Segunda a Sábado: 7h às 22h</p>
                <p>Domingo: 7h às 20h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Links Rápidos</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li><a href="/ethics" className="text-gray-300 hover:text-white transition-colors">Ética e Valores</a></li>
            <li><a href="/history" className="text-gray-300 hover:text-white transition-colors">Nossa História</a></li>
            <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Trabalhe Conosco</a></li>
            <li><a href="/brands" className="text-gray-300 hover:text-white transition-colors">Nossas Marcas</a></li>
          </ul>
          
          {/* Social Media */}
          <div>
            <h4 className="text-white font-medium mb-3">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-110 transition-transform"
                  title={s.label}
                >
                  <img 
                    src={s.icon} 
                    alt={s.label} 
                    className="h-8 w-8 opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Meus Apps */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Meus Apps</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a 
                href="/apps" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Ver Todos os Apps
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Grupo RedeCompras. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-1">
           
          </p>
        </div>
        
        <div className="flex gap-4 text-xs text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="/ethics" className="hover:text-white transition-colors">Código de Ética</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
