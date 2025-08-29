
export interface Store {
  nome: string;
  endereco: string;
  cidade: string;
  telefone: string;
  horario: string;
  destaque: string;
  coords: string;
  mapEmbedUrl: string;
}

export const LOJAS: Store[] = [
  {
    nome: "RedeCompras - Catedral",
    endereco: "Av. Mal. Floriano Peixoto, 912 - Centro",
    cidade: "Campina Grande, PB, 58400-180",
    telefone: "(83) 2102-5331",
    horario: "Seg-Sáb: 6h-21h | Dom: 7h-14h",
    destaque: "Centro da cidade",
    coords: "-7.217982168451253,-35.88077056297287",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.88077056297287!3d-7.217982168451253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Feira de Flores",
    endereco: "R. Cel. João Lourenço Porto, 374 - Centro",
    cidade: "Campina Grande, PB, 58400-240", 
    telefone: "(83) 2102-5300",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Próximo à feira",
    coords: "-7.219636984110571,-35.8797387812133",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.8797387812133!3d-7.219636984110571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Avenida Canal",
    endereco: "R. Marcílio Dias, 325 - Centro",
    cidade: "Campina Grande, PB, 58400-190",
    telefone: "(83) 3341-6341",
    horario: "Seg-Sáb: 7h-20h | Dom: 7h-13h", 
    destaque: "Avenida principal",
    coords: "-7.217922623218786,-35.8764503604575",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.8764503604575!3d-7.217922623218786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Catolé", 
    endereco: "R. Alzira Figueirêdo, 400 - Sandra Cavalcante",
    cidade: "Campina Grande, PB, 58410-755",
    telefone: "(83) 2102-5335",
    horario: "Seg-Sáb: 7h-21h | Dom: 7h-18h",
    destaque: "Bairro Catolé",
    coords: "-7.242415768676204,-35.87814530278548",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.87814530278548!3d-7.242415768676204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Malvinas",
    endereco: "R. Olindina Pereira dos Santos, 412 - Malvinas",
    cidade: "Campina Grande, PB, 58432-664",
    telefone: "(83) 3336-9851",
    horario: "Seg-Sáb: 7h-20h | Dom: 7h-16h",
    destaque: "Bairro Malvinas",
    coords: "-7.249125112553476,-35.92821397346423",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.92821397346423!3d-7.249125112553476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Aeroclube",
    endereco: "R. Francisco Leocádio Ribeiro Coutinho, 601 - Aeroclube",
    cidade: "João Pessoa, PB, 58036-450",
    telefone: "(83) 3246-6601",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "João Pessoa",
    coords: "-7.084907754658828,-34.84552210463792",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-34.84552210463792!3d-7.084907754658828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Intermares",
    endereco: "Av. Mar Vermelho, 89 - Intermares",
    cidade: "Cabedelo, PB, 58102-120",
    telefone: "(83) 99336-3659",
    horario: "Seg-Sáb: 7h-21h | Dom: 7h-20h",
    destaque: "Próximo à praia",
    coords: "-7.044998262375736,-34.842249445115655",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-34.842249445115655!3d-7.044998262375736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "BomQuéSó Liberdade",
    endereco: "R. Odon Bezerra, 459 - Liberdade",
    cidade: "Campina Grande, PB, 58414-160", 
    telefone: "(83) 2102-5312",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "BomQuéSó",
    coords: "-7.235985132860862,-35.89481668880853",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.89481668880853!3d-7.235985132860862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "BomQuéSó Dinamérica",
    endereco: "Av. Dinamérica Alves Correia, 751 - Santa Cruz",
    cidade: "Campina Grande, PB, 58417-095",
    telefone: "(83) 2102-5342",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "BomQuéSó",
    coords: "-7.240141526994634,-35.90983678744202",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.90983678744202!3d-7.240141526994634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMDQuNyJTIDM1wrA1Mic1MS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  }
];
