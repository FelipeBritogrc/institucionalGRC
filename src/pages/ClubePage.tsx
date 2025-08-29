import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CLUBS = {
  'rc-plus': {
    name: 'Super App RedeCompras',
    description: 'O programa de fidelidade que recompensa suas compras com cashback e benefícios exclusivos.',
    benefits: [
      { icon: '💰', title: 'Cashback em todas as compras' },
      { icon: '🎁', title: 'Ofertas exclusivas' },
      { icon: '⚡', title: 'Pontos extras em datas especiais' },
      { icon: '📱', title: 'App intuitivo e fácil de usar' }
    ],
    howItWorks: [
      'Baixe o aplicativo RC+',
      'Cadastre-se gratuitamente',
      'Compre em qualquer loja RedeCompras',
      'Acumule pontos e cashback',
      'Resgate em novas compras'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=br.com.redecompras.rcplus',
    appStoreUrl: 'https://apps.apple.com/us/app/super-app-redecompras/id1553479594'
  },
  'cliente-arretado': {
    name: 'Cliente Arretado Bomquesó',
    description: 'O clube de vantagens que oferece descontos especiais e promoções exclusivas para nossos clientes mais fiéis.',
    benefits: [
      { icon: '🏷️', title: 'Descontos exclusivos' },
      { icon: '🎯', title: 'Ofertas personalizadas' },
      { icon: '🎊', title: 'Promoções especiais' },
      { icon: '📱', title: 'Cartão virtual no app' }
    ],
    howItWorks: [
      'Instale o app Cliente Arretado',
      'Faça seu cadastro',
      'Ative seu cartão virtual',
      'Aproveite os descontos',
      'Participe de promoções'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=br.com.idever.fidelidade.bomqueso&hl=pt_BR',
    appStoreUrl: 'https://apps.apple.com/br/app/cliente-arretado-bomques%C3%B3/id6480092828'
  }
};

const ClubePage = () => {
  const { id } = useParams<{ id: string }>();
  const club = CLUBS[id as keyof typeof CLUBS];

  if (!club) {
    return <div>Clube não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-[#282e76] mb-8">{club.name}</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-4">O que é?</h2>
            <p className="text-lg text-gray-700">{club.description}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-6">Benefícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {club.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <span className="text-2xl mr-4">{benefit.icon}</span>
                  <span className="text-gray-800">{benefit.title}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-6">Como funciona</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <ol className="list-none space-y-4">
                {club.howItWorks.map((step, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#282e76] text-white flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-800">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-6">Já baixou o app?</h2>
            <div className="flex justify-center gap-4">
              <a
                href={club.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                  alt="Disponível no Google Play"
                  className="h-16"
                />
              </a>
              <a
                href={club.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Baixar na App Store"
                  className="h-16"
                />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClubePage;