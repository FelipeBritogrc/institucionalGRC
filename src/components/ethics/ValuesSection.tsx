
import React from "react";

const ValuesSection: React.FC = () => {
  const valores = [
    {
      title: "1. Excelência no Atendimento",
      description: "Buscamos encantar nossos clientes em cada detalhe, proporcionando uma experiência de compras única combinando qualidade, inovação e atenção genuína às suas necessidades."
    },
    {
      title: "2. Integridade",
      description: "A integridade é nosso compromisso absoluto: fazemos sempre o certo, garantindo transparência e confiança em cada interação."
    },
    {
      title: "3. Cuidado e Valorização das Pessoas",
      description: "Cada pessoa é essencial para nosso sucesso – cuidamos, respeitamos e valorizamos quem faz parte da nossa jornada."
    },
    {
      title: "4. Responsabilidade Socioambiental",
      description: "Reduzir, reutilizar e reciclar começa com você: contribua para um futuro mais sustentável e faça a diferença."
    },
    {
      title: "5. Humildade e Respeito",
      description: "Valorizamos o respeito e a humildade, aprendendo com cada pessoa e fortalecendo nosso crescimento por meio do trabalho em equipe."
    },
    {
      title: "6. Crença em Deus",
      description: "Nossa fé em Deus nos permite caminhar com confiança, sabendo que cada passo é guiado por um propósito maior."
    },
    {
      title: "7. Atitude de Dono",
      description: "Agimos com paixão e responsabilidade, cuidando de cada detalhe e fazendo acontecer com propósito e dedicação."
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-[#2545B8] mb-10 text-center">Nossos Valores</h2>
      <div className="grid gap-6">
        {valores.map((valor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#2545B8] hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-[#2545B8] mb-3">{valor.title}</h3>
            <p className="text-gray-700 leading-relaxed">{valor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
