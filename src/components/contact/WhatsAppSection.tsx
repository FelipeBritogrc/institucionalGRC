
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, CreditCard, Headphones } from "lucide-react";

interface WhatsAppButtonProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  color 
}) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de falar com o ${title}.`);
    const whatsappUrl = `https://wa.me/55${number}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center flex-grow">{description}</p>
      <Button 
        onClick={handleWhatsAppClick}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 mt-auto"
      >
        <MessageSquare className="h-5 w-5 mr-2" />
        Conversar no WhatsApp
      </Button>
    </div>
  );
};

const WhatsAppSection: React.FC = () => {
  const whatsappContacts = [
    {
      number: "8393087764",
      title: "SAC RedeCompras Campina Grande",
      description: "Atendimento para clientes de Campina Grande e região",
      icon: Headphones,
      color: "bg-[#2545B8]"
    },
    {
      number: "8393087764",
      title: "SAC RedeCompras João Pessoa",
      description: "Atendimento para clientes de João Pessoa e região",
      icon: Users,
      color: "bg-[#0d7c3d]"
    },
    {
      number: "8393087764",
      title: "SAC BomQuesó",
      description: "Atendimento especializado BomQuesó",
      icon: CreditCard,
      color: "bg-[#282e76]"
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Atendimento via WhatsApp
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Escolha o setor que melhor atende sua necessidade e fale diretamente conosco
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whatsappContacts.map((contact, index) => (
          <WhatsAppButton
            key={index}
            number={contact.number}
            title={contact.title}
            description={contact.description}
            icon={contact.icon}
            color={contact.color}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatsAppSection;
