export interface Banner {
  id: string;
  img: string;
  title: string;
  description: string;
  align: 'left' | 'center' | 'right';
  externalUrl?: string;
  priority?: boolean;
}

export const HERO_BANNERS: Banner[] = [
  {
    id: 'welcome',
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2300&q=80",
    title: "Bem-vindo ao Grupo RedeCompras",
    description: "Unindo tradição e inovação para atender você cada vez melhor.",
    align: "center",
    priority: true
  },
  {
    id: 'bomqueso',
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2300&q=80",
    title: "BomQuéSó: Economia e Qualidade",
    description: "Conheça nossa linha de atacarejo e aproveite ofertas imbatíveis.",
    align: "left"
  },
  {
    id: 'ecommerce',
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2300&q=80",
    title: "RedeCompras.com",
    description: "Facilidade, confiança e entrega rápida no nosso e-commerce.",
    align: "right"
  },
  {
    id: 'ofertas',
    img: "https://images.unsplash.com/photo-1627137220795-a9e74dc36875?auto=format&fit=crop&w=2300&q=80",
    title: "Ofertas que surpreendem!",
    description: "Só este mês, super descontos em toda loja física.",
    align: "left"
  },
  {
    id: 'parceiro',
    img: "https://images.unsplash.com/photo-1556742400-b5dd9641e278?auto=format&fit=crop&w=2300&q=80",
    title: "Conheça nosso parceiro!",
    description: "",
    align: "right",
    externalUrl: "https://parceiro.com"
  }
];

export const getAlignmentClasses = (align: Banner['align']) => {
  switch (align) {
    case 'left':
      return "items-start text-left";
    case 'right':
      return "items-end text-right";
    default:
      return "items-center text-center";
  }
};

export const getPositionClasses = (align: Banner['align']) => {
  switch (align) {
    case 'left':
      return "left-[2vw] lg:left-[4vw] right-auto";
    case 'right':
      return "right-[2vw] lg:right-[4vw] left-auto";
    default:
      return "left-0 right-0 mx-auto";
  }
};