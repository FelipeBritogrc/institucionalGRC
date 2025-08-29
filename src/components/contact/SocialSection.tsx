
import React from "react";
import { Instagram, Facebook } from "lucide-react";

const SocialSection: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/redecomprasoficial",
      icon: Instagram,
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400",
      description: "Siga-nos no Instagram para novidades e promoções"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/redecomprasoficial",
      icon: Facebook,
      color: "bg-blue-600",
      description: "Curta nossa página no Facebook e fique por dentro de tudo"
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Siga-nos nas Redes Sociais
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Acompanhe nossas novidades, promoções e conteúdos exclusivos
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {socialLinks.map((social, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
              <social.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{social.name}</h3>
            <p className="text-gray-600 mb-6 text-center">{social.description}</p>
            <a 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
            >
              Seguir no {social.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
