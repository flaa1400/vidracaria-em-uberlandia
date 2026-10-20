// Catálogo Completo dos 15 Serviços da Vidraçaria Axis Glass em Uberlândia

export interface ServiceData {
  slug: string;
  title: string;
  fullTitle: string;
  badge: string;
  description: string;
  order: number;
  features: string[];
}

export const SERVICES_LIST: ServiceData[] = [
  {
    "slug": "esquadrias-de-aluminio",
    "title": "Esquadrias de Alumínio",
    "fullTitle": "Esquadrias de Alumínio em Uberlândia",
    "badge": "Alta Performance",
    "description": "Fabricação e instalação de esquadrias de alumínio sob medida das linhas Suprema e Gold. Portas, janelas, painéis fixos e persianas integradas em Uberlândia.",
    "order": 1,
    "features": [
      "Perfis de alumínio linha nobre Suprema e Gold",
      "Pintura eletrostática a pó (Preto, Branco, Bronze, Corten e Amadeirado)",
      "Fechaduras e roldanas multiponto de alta resistência",
      "Vedação termoacústica com borrachas EPDM",
      "Conformidade total com a norma ABNT NBR 10821"
    ]
  },
  {
    "slug": "manutencao-em-sacadas-de-vidro",
    "title": "Manutenção em Sacadas de Vidro",
    "fullTitle": "Manutenção em Sacadas de Vidro em Uberlândia",
    "badge": "Assistência Especializada",
    "description": "Serviço preventivo e corretivo para sacadas e varandas de vidro. Troca de roldanas blindadas, calafetação, substituição de escovas e regulagem de painéis em Uberlândia.",
    "order": 2,
    "features": [
      "Troca de roldanas blindadas em aço inoxidável",
      "Substituição de escovinhas vedadoras e guarnições de silicone",
      "Alinhamento e nivelamento de folhas travadas",
      "Aplicação de polímero vedante para eliminar vazamentos de chuva",
      "Garantia técnica de estanqueidade e segurança NBR 16259"
    ]
  },
  {
    "slug": "manutencao-em-esquadrias-de-aluminio",
    "title": "Manutenção em Esquadrias de Alumínio",
    "fullTitle": "Manutenção em Esquadrias de Alumínio em Uberlândia",
    "badge": "Restauração & Reparos",
    "description": "Serviço de manutenção, reforma e conserto de portas e janelas de alumínio. Troca de roldanas, fechos concha, braços de maxi-ar e guarnições de borracha em Uberlândia.",
    "order": 3,
    "features": [
      "Substituição de roldanas simples e duplas reguláveis",
      "Troca de fechos concha, maçanetas e travas multiponto",
      "Reparo em braços articulados de janelas maxi-ar",
      "Substituição de borrachas de vedação ressecadas",
      "Regulagem de pressão e prumo das folhas de correr"
    ]
  },
  {
    "slug": "conserto-de-box-de-banheiro",
    "title": "Conserto de Box de Banheiro",
    "fullTitle": "Conserto de Box de Banheiro em Uberlândia",
    "badge": "Socorro Rápido",
    "description": "Atendimento emergencial e conserto de box de banheiro em Uberlândia. Troca de roldanas, guias inferiores, batedores de silicone, puxadores e conserto de portas caídas.",
    "order": 4,
    "features": [
      "Atendimento ágil para portas que saíram do trilho",
      "Substituição de roldanas blindadas com regulagem",
      "Troca de guia inferior de nylon anti-impacto",
      "Instalação de batedores e travas de segurança",
      "Vedação contra vazamento de água de banho"
    ]
  },
  {
    "slug": "cortina-de-vidro",
    "title": "Cortina de Vidro",
    "fullTitle": "Cortina de Vidro em Uberlândia",
    "badge": "Visão Panorâmica",
    "description": "Instalação de cortina de vidro retrátil e articulada em Uberlândia. Sistema europeu de abertura 100% dos vãos para varandas, sacadas e áreas gourmet com máxima transparência.",
    "order": 5,
    "features": [
      "Sistema de abertura retrátil e multidirecional 100%",
      "Sem esquadrias verticais (visão panorâmica total)",
      "Vidro temperado 8mm ou 10mm certificado Inmetro",
      "Atenuação acústica e isolamento térmico eficiente",
      "Fechaduras com chave e trava de segurança para crianças"
    ]
  },
  {
    "slug": "envidracamento-de-sacada",
    "title": "Envidraçamento de Sacada",
    "fullTitle": "Envidraçamento de Sacada em Uberlândia",
    "badge": "Conforto & Requinte",
    "description": "Serviço completo de envidraçamento de sacada e varanda gourmet em Uberlândia. Engenharia técnica qualificada com emissão de ART/RRT e garantia estrutural.",
    "order": 6,
    "features": [
      "Projeto em conformidade com a norma técnica ABNT NBR 16259",
      "Vidros temperados de alta densidade 8mm ou 10mm",
      "Roldanas em aço inox maciço com giro suave",
      "Calafetação com polímero elástico resistente a raios solares",
      "Atendimento com emissão de ART ou RRT para condomínios"
    ]
  },
  {
    "slug": "divisorias-de-vidro",
    "title": "Divisórias de Vidro",
    "fullTitle": "Divisórias de Vidro em Uberlândia",
    "badge": "Corporativo & Residencial",
    "description": "Divisórias de vidro temperado e laminado para escritórios, clínicas, consultórios, cozinhas e lavanderias em Uberlândia. Ambientes modernos com luz natural e isolamento acústico.",
    "order": 7,
    "features": [
      "Vidros temperados de 8mm e 10mm ou laminados acústicos",
      "Opções em vidro incolor, serigrafado, jateado ou com película privativa",
      "Estrutura slim em alumínio anodizado ou preto industrial",
      "Portas de correr com trilho embutido ou pivotantes com mola de piso",
      "Isolamento acústico sem comprometer a luminosidade natural"
    ]
  },
  {
    "slug": "fechamento-de-area-externa-com-vidro",
    "title": "Fechamento de Área Externa com Vidro",
    "fullTitle": "Fechamento de Área Externa com Vidro em Uberlândia",
    "badge": "Espaço Gourmet",
    "description": "Fechamento de quiosques, áreas de churrasqueira, varandas térreas e garagens com portas de vidro retráteis ou de correr em Uberlândia. Conforto e proteção climática.",
    "order": 8,
    "features": [
      "Portas de correr panorâmicas com múltiplas folhas",
      "Perfis de alumínio robustos resistentes a sol e chuva",
      "Vidro de segurança laminado ou temperado 8mm/10mm",
      "Fechaduras e travas de segurança com chave",
      "Proteção contra poeira, vento forte e tempestades"
    ]
  },
  {
    "slug": "guarda-corpo-de-vidro",
    "title": "Guarda Corpo de Vidro",
    "fullTitle": "Guarda Corpo de Vidro em Uberlândia",
    "badge": "Segurança Máxima",
    "description": "Guarda-corpo de vidro para escadas, mezaninos, sacadas e piscinas em Uberlândia. Instalação em conformidade estrita com a NBR 14718 com torres em inox ou botões spigot.",
    "order": 9,
    "features": [
      "Vidro laminado temperado ou laminado duplo de segurança",
      "Fixação por torres em aço inox 304/316, spigots ou botões laterais",
      "Corrimão integrado em alumínio nobre ou aço inox",
      "Testado para suportar cargas de impacto e pressão de vento",
      "Projetado estritamente de acordo com a norma ABNT NBR 14718"
    ]
  },
  {
    "slug": "muro-de-vidro",
    "title": "Muro de Vidro",
    "fullTitle": "Muro de Vidro em Uberlândia",
    "badge": "Fachadas Modernas",
    "description": "Muro e fachada de vidro temperado e laminado para residências, condomínios e comércios em Uberlândia. Beleza contemporânea, segurança e valorização da fachada.",
    "order": 10,
    "features": [
      "Vidro temperado 10mm ou laminado de segurança de alta espessura",
      "Colunas de sustentação em alumínio estrutural ou tubos de inox",
      "Portão social de vidro com fechadura elétrica ou interfone integrado",
      "Opções de vidro incolor, verde, fumê ou com película de privacidade",
      "Resistente a impactos frontais e intempéries climáticas"
    ]
  },
  {
    "slug": "telhado-ou-cobertura-de-vidro",
    "title": "Telhado ou Cobertura de Vidro",
    "fullTitle": "Telhado ou Cobertura de Vidro em Uberlândia",
    "badge": "Conforto Térmico",
    "description": "Projetos de telhado e cobertura de vidro laminado ou refletivo para garagens, jardins de inverno, pergolados e áreas de lazer em Uberlândia. Luz natural com proteção solar.",
    "order": 11,
    "features": [
      "Vidro laminado de segurança obrigatório com película PVB",
      "Vidros de controle solar refletivo (bloqueio de até 80% do calor)",
      "Estrutura metálica tratada ou alumínio com calha integrada",
      "Vedação com borrachas de silicone estrutural anti-vazamento",
      "Opções de vidro translúcido, incolor, fumê, bronze ou leitoso"
    ]
  },
  {
    "slug": "box-para-banheiro",
    "title": "Box para Banheiro",
    "fullTitle": "Box para Banheiro em Uberlândia",
    "badge": "Mais Procurado",
    "description": "Box de vidro para banheiro sob medida em Uberlândia. Box até o teto, de correr, de canto, de abrir e linha Elegance com roldanas de inox aparentes.",
    "order": 12,
    "features": [
      "Vidro temperado 8mm certificado pelo Inmetro",
      "Box até o teto com efeito câmara térmica",
      "Roldanas blindadas de rolamento suave e silencioso",
      "Perfis em preto fosco, cromado, champagne, bronze e dourado",
      "Vedação completa contra vazamento de água e umidade"
    ]
  },
  {
    "slug": "porta-de-vidro-temperado",
    "title": "Porta de Vidro Temperado",
    "fullTitle": "Porta de Vidro Temperado em Uberlândia",
    "badge": "Versatilidade & Luz",
    "description": "Portas de vidro temperado sob medida em Uberlândia. Modelos de correr, pivotantes com mola de piso hidráulica, de abrir e portas automáticas comerciais.",
    "order": 13,
    "features": [
      "Vidro temperado 8mm ou 10mm de segurança",
      "Portas pivotantes com puxadores em inox de 40cm a 150cm",
      "Molas hidráulicas de piso Dorma ou similar de alta durabilidade",
      "Fechaduras bico de papagaio e trincos com chave",
      "Perfis de correr suspensos ou embutidos no piso"
    ]
  },
  {
    "slug": "manutencao-de-box-de-banheiro",
    "title": "Manutenção de Box de Banheiro",
    "fullTitle": "Manutenção de Box de Banheiro em Uberlândia",
    "badge": "Segurança Residencial",
    "description": "Serviço preventivo e corretivo anual para box de banheiro em Uberlândia conforme a ABNT NBR 14207. Troca de roldanas, guias, travas e silicone anti-mofo.",
    "order": 14,
    "features": [
      "Inspeção visual e teste de choque mecânico",
      "Troca preventiva de roldanas antes do travamento total",
      "Substituição de borrachas amortecedoras e batedores",
      "Calafetação completa com silicone fungicida premium",
      "Laudo de conformidade com a norma ABNT NBR 14207"
    ]
  },
  {
    "slug": "espelhos-sob-medida",
    "title": "Espelhos Sob Medida",
    "fullTitle": "Espelhos Sob Medida em Uberlândia",
    "badge": "Design de Interiores",
    "description": "Fabricação e instalação de espelhos sob medida em Uberlândia. Espelhos lapidados, bisotados, espelhos orgânicos com LED e painéis de parede inteira.",
    "order": 15,
    "features": [
      "Vidro cristal prata de primeira linha (Cebrace / Guardian que não oxida)",
      "Lapidação reta com acabamento polido brilhante",
      "Acabamento bisotê com chanfro milimétrico de 1cm a 3cm",
      "Espelhos orgânicos e assimétricos com iluminação em fita LED",
      "Instalação colada com silicone neutro específico para espelho"
    ]
  }
];

export default SERVICES_LIST;
