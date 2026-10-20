export interface SiteConfig {
  siteUrl: string;
  name: string;
  tradeName: string;
  legalName: string;
  slogan: string;
  description: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappDefaultMessage: string;
  whatsappUrl: string;
  email: string;
  social: {
    instagram: string;
    facebook: string;
  };
  address: {
    streetAddress: string;
    neighborhood: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    fullFormatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  openingHoursHuman: string;
  priceRange: string;
  areaServed: string[];
}

export const SITE_CONFIG: SiteConfig = {
  siteUrl: 'https://vidracariaaxisglass.com.br',
  name: 'Vidraçaria Axis Glass',
  tradeName: 'Vidraçaria Axis Glass Uberlândia',
  legalName: 'Vidraçaria Axis Glass',
  slogan: 'Vidraçaria em Uberlândia | Vidros Temperados, Esquadrias e Manutenções',
  description: 'Vidraçaria de referência em Uberlândia - MG. Box para banheiro, esquadrias de alumínio, cortina de vidro e manutenções com atendimento ágil em todos os bairros.',
  whatsapp: '(11) 96429-9548',
  whatsappRaw: '5511964299548',
  whatsappDefaultMessage: 'Olá, vim do Site Vidraçaria Axis Glass, e Gostaria de fazer um Orçamento',
  whatsappUrl: 'https://wa.me/5511964299548?text=Ol%C3%A1%2C%20vim%20do%20Site%20Vidra%C3%A7aria%20Axis%20Glass%2C%20e%20Gostaria%20de%20fazer%20um%20Or%C3%A7amento',
  email: 'Vidracariaaxisglass@yahoo.com',
  social: {
    instagram: 'https://www.instagram.com/vidracariaaxisglass',
    facebook: 'https://www.facebook.com/profile.php?id=61595641768597',
  },
  address: {
    streetAddress: 'Av. Sílvio Rugani, 52',
    neighborhood: 'Tubalina',
    addressLocality: 'Uberlândia',
    addressRegion: 'MG',
    postalCode: '38412-046',
    addressCountry: 'BR',
    fullFormatted: 'Av. Sílvio Rugani, 52 - Tubalina, Uberlândia - MG',
  },
  geo: {
    latitude: -18.9378,
    longitude: -48.3005,
  },
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
    },
  ],
  openingHoursHuman: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00',
  priceRange: '$$',
  areaServed: [
    'Tubalina',
    'Granja Marileusa',
    'Santa Mônica',
    'Martins',
    'Fundinho',
    'Jardim Karaíba',
    'Tibery',
    'Altamira',
    'Saraiva',
    'Umuarama',
    'Shopping Park',
    'Morada da Colina',
    'Centro',
    'Lídice',
    'Osvaldo Rezende',
    'Copacabana',
    'Patrimônio',
    'Uberlândia',
  ],
};

export default SITE_CONFIG;
