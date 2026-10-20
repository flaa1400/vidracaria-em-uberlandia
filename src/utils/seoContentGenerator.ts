import type { NeighborhoodData } from '../data/neighborhoodsData';
import type { ServiceData } from '../data/servicesData';

export interface LocalizedFAQ {
  question: string;
  answer: string;
}

export function generateNeighborhoodHomeContent(neighborhood: NeighborhoodData) {
  const isSouth = neighborhood.zone === 'Zona Sul';
  const isEast = neighborhood.zone === 'Zona Leste';
  const isWest = neighborhood.zone === 'Zona Oeste';
  const isNorth = neighborhood.zone === 'Zona Norte';
  const isCentral = neighborhood.zone === 'Centro';

  let localContext = '';
  if (isCentral) {
    localContext = `Com localização privilegiada na região central de Uberlândia, o bairro ${neighborhood.name} conta com intensa atividade residencial e comercial, repleto de edifícios tradicionais, consultórios e lojas na região de vias como ${neighborhood.landmarks}. Nossa equipe atua com soluções sob medida em envidraçamento, portas acústicas e reformas de esquadrias que valorizam os imóveis e proporcionam privacidade.`;
  } else if (isSouth) {
    localContext = `O bairro ${neighborhood.name}, situado na valorizada Zona Sul de Uberlândia nas proximidades de ${neighborhood.landmarks}, destaca-se pela modernidade arquitetônica de seus condomínios, sobrados de alto padrão e apartamentos com varandas gourmet. Desenvolvemos projetos refinados em cortinas de vidro panorâmicas, box até o teto Elegance, esquadrias pretas da linha Gold e espelhos bisotados.`;
  } else if (isEast) {
    localContext = `Na dinâmica Zona Leste de Uberlândia, próximo a pontos como ${neighborhood.landmarks}, o bairro ${neighborhood.name} apresenta contínuo crescimento urbano. Atendemos proprietários e construtores com soluções completas de vidraçaria, desde fechamento de sacadas em edifícios verticais até portas e janelas de alumínio reforçadas para residências contemporâneas.`;
  } else if (isWest) {
    localContext = `Vizinho à nossa matriz no Tubalina, o bairro ${neighborhood.name} na Zona Oeste conta com deslocamento ultrarrápido da nossa equipe técnica (cerca de ${neighborhood.time}). Atendemos reformas residenciais, substituição de vidros comuns por temperados de segurança, instalação de box de correr e manutenções preventivas com a máxima agilidade.`;
  } else {
    localContext = `O bairro ${neighborhood.name}, tradicional polo da Zona Norte de Uberlândia próximo a ${neighborhood.landmarks}, possui residências amplas e estabelecimentos comerciais ativos. Realizamos vistorias gratuitas com medição a laser, oferecendo esquadrias sob medida, coberturas de vidro e box de alta durabilidade com condições direto de fábrica.`;
  }

  const title = `Vidraçaria no ${neighborhood.name} em Uberlândia | Box, Esquadrias e Vidros`;
  const metaDescription = `Vidraçaria especializada no bairro ${neighborhood.name} em Uberlândia - MG. Box até o teto, cortina de vidro para sacadas, esquadrias e manutenções com medição a laser gratuita no ${neighborhood.name}. Solicite orçamento!`;
  const h1 = `Vidraçaria no ${neighborhood.name} em Uberlândia`;

  const faqs: LocalizedFAQ[] = [
    {
      question: `A Vidraçaria Axis Glass atende residências e condomínios no ${neighborhood.name}?`,
      answer: `Sim! Realizamos atendimento técnico completo no bairro ${neighborhood.name} em Uberlândia. Atendemos casas, sobrados, apartamentos em condomínios e estabelecimentos comerciais com hora marcada.`
    },
    {
      question: `Existe cobrança de taxa de visita ou deslocamento até o bairro ${neighborhood.name}?`,
      answer: `Não cobramos nenhuma taxa de visita para o ${neighborhood.name}. Nosso especialista comparece com trena a laser profissional para analisar o vão, tirar medidas exatas e apresentar a melhor solução técnica sem custo.`
    },
    {
      question: `Qual é o prazo médio de entrega e instalação para clientes no ${neighborhood.name}?`,
      answer: `Para boxes de banheiro, espelhos sob medida e portas convencionais, o prazo é de 5 a 10 dias úteis. Projetos de cortinas de vidro, esquadrias de alumínio completas e coberturas são entregues entre 10 e 20 dias úteis com garantia formal.`
    },
    {
      question: `Como solicitar um orçamento de vidraçaria no ${neighborhood.name} agora mesmo?`,
      answer: `Basta clicar no botão de WhatsApp do nosso site. Você fala diretamente com nosso especialista, envia fotos ou medidas aproximadas do seu vão no ${neighborhood.name} e recebe uma estimativa rápida.`
    }
  ];

  return {
    title,
    metaDescription,
    h1,
    localContext,
    faqs
  };
}

export function generateNeighborhoodServiceContent(neighborhood: NeighborhoodData, service: ServiceData) {
  const isMaintenance = service.slug.includes('manutencao') || service.slug.includes('conserto');
  const isBox = service.slug.includes('box');
  const isSacada = service.slug.includes('sacada') || service.slug.includes('cortina');
  const isEsquadria = service.slug.includes('esquadria');
  const isEstrutural = service.slug.includes('guarda-corpo') || service.slug.includes('muro') || service.slug.includes('cobertura') || service.slug.includes('telhado');

  let serviceContext = '';
  if (isMaintenance) {
    serviceContext = `Se você mora no bairro ${neighborhood.name} em Uberlândia e está enfrentando problemas com vidros travando, roldanas emperradas ou vazamentos de chuva, a Axis Glass disponibiliza atendimento ágil para ${service.title.toLowerCase()}. Com deslocamento em apenas ${neighborhood.time} a partir da nossa matriz no Tubalina, substituímos componentes desgastados por peças nobres em aço inox e polímeros resistentes, restaurando a segurança do seu ambiente.`;
  } else if (isBox) {
    serviceContext = `O serviço de ${service.title.toLowerCase()} no bairro ${neighborhood.name} em Uberlândia traz funcionalidade, conforto térmico e elegância ao seu banheiro. Fabricamos modelos de correr, canto, abrir e o cobiçado box até o teto com vidros temperados de 8mm certificados pelo Inmetro. Para imóveis no ${neighborhood.name}, garantimos vedação perfeita que impede poças de água e acabamento em perfis preto fosco, cromado ou bronze.`;
  } else if (isSacada) {
    serviceContext = `Para quem reside ou trabalha no bairro ${neighborhood.name} (${neighborhood.zone} de Uberlândia), investir em ${service.title.toLowerCase()} proporciona ampliação da área útil, proteção contra poeira e ventos fortes, além de atenuar ruídos urbanos vindos de vias como ${neighborhood.landmarks}. Utilizamos o sistema retrátil de painéis deslizantes em vidro laminado ou temperado em total conformidade com a norma NBR 16259.`;
  } else if (isEsquadria) {
    serviceContext = `As soluções em ${service.title.toLowerCase()} para o bairro ${neighborhood.name} são fabricadas com perfis de alumínio estrutural de linhas nobres (Suprema e Gold). Ideais para novas construções e reformas em ${neighborhood.name}, nossas esquadrias oferecem estanqueidade contra água, pintura eletrostática que não desbota com o sol de Uberlândia e funcionamento suave para toda a vida.`;
  } else if (isEstrutural) {
    serviceContext = `Projetos de ${service.title.toLowerCase()} no bairro ${neighborhood.name} demandam rigor absoluto em segurança e estética refinada. Atendendo às normas ABNT NBR 14718 e 14207, executamos instalações seguras para sobrados, sacadas e áreas de lazer no ${neighborhood.name}, combinando vidro de segurança com torres em aço inox 304 e ferragens de alta resistência mecânica.`;
  } else {
    serviceContext = `A contratação de ${service.title.toLowerCase()} no bairro ${neighborhood.name} em Uberlândia é realizada com materiais de primeira linha e medição milimétrica a laser. Transformamos o visual do seu imóvel em ${neighborhood.name}, agregando luminosidade natural, amplitude e sofisticação contemporânea.`;
  }

  const title = `${service.title} no ${neighborhood.name} em Uberlândia | Vidraçaria Axis Glass`;
  const metaDescription = `Instalação e conserto de ${service.title.toLowerCase()} no bairro ${neighborhood.name} em Uberlândia - MG. Medição técnica a laser sem taxa de visita, vidros certificados e garantia formal. Peça seu orçamento!`;
  const h1 = `${service.title} no ${neighborhood.name} em Uberlândia`;

  const faqs: LocalizedFAQ[] = [
    {
      question: `Como funciona a medição para ${service.title.toLowerCase()} no ${neighborhood.name}?`,
      answer: `Nosso técnico se desloca até seu endereço no bairro ${neighborhood.name} com equipamento de trena a laser. Conferimos o prumo, o nível e a angulação dos vãos sem cobrar taxa de visita.`
    },
    {
      question: `Quais os diferenciais dos vidros utilizados para ${service.title.toLowerCase()}?`,
      answer: `Trabalhamos exclusivamente com vidros homologados com selo do Inmetro e espessuras em conformidade com as normas ABNT aplicáveis, garantindo resistência mecânica e proteção aos ocupantes do imóvel no ${neighborhood.name}.`
    },
    {
      question: `Vocês parcelam o pagamento do serviço de ${service.title.toLowerCase()} em Uberlândia?`,
      answer: `Sim! Oferecemos condições facilitadas de pagamento no cartão de crédito em até 12x, além de descontos especiais para pagamentos à vista via Pix ou transferência.`
    },
    {
      question: `Qual a garantia oferecida para ${service.title.toLowerCase()} no ${neighborhood.name}?`,
      answer: `Todos os nossos serviços contam com garantia formal de fabricação e montagem, cobrindo alinhamento de ferragens, qualidade dos vidros e estanqueidade de vedação no seu imóvel em Uberlândia.`
    }
  ];

  return {
    title,
    metaDescription,
    h1,
    serviceContext,
    faqs
  };
}
