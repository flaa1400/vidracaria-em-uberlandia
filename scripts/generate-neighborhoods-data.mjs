import fs from 'fs';
import path from 'path';

// Complete list of 73 neighborhoods provided by user
const rawNeighborhoods = [
  { name: 'Centro', zone: 'Centro', type: 'Comercial e Edifícios Residenciais', landmarks: 'Praça Tubal Vilela, Av. Afonso Pena, Av. Floriano Peixoto', time: '10 a 15 min' },
  { name: 'Fundinho', zone: 'Centro', type: 'Histórico e Residencial Nobre', landmarks: 'Praça Coronel Carneiro, Museu Municipal, Rua Tiradentes', time: '10 a 12 min' },
  { name: 'Nossa Senhora Aparecida', zone: 'Centro', type: 'Residencial e Comercial', landmarks: 'Próximo à Av. Brasil e Av. Afonso Pena', time: '12 a 15 min' },
  { name: 'Martins', zone: 'Centro', type: 'Misto Tradicional com Prédios e Clínicas', landmarks: 'Av. Fernando Vilela, Av. Getúlio Vargas', time: '8 a 12 min' },
  { name: 'Bom Jesus', zone: 'Centro', type: 'Residencial e Serviços', landmarks: 'Próximo ao Centro e Bairro Brasil', time: '10 a 15 min' },
  { name: 'Brasil', zone: 'Centro', type: 'Comercial e Residencial Tradicional', landmarks: 'Av. Brasil, Av. Floriano Peixoto', time: '12 a 15 min' },
  { name: 'Cazeca', zone: 'Centro', type: 'Residencial e Clínicas Médicas', landmarks: 'Próximo ao Center Shopping e Av. Rondon Pacheco', time: '10 a 14 min' },
  { name: 'Lídice', zone: 'Centro', type: 'Residencial Nobre e Prédios de Médio/Alto Padrão', landmarks: 'Rua Santos Dumont, Av. Rondon Pacheco', time: '10 a 12 min' },
  { name: 'Tabajaras', zone: 'Centro', type: 'Residencial Nobre e Consultórios', landmarks: 'Próximo ao Praia Clube e Av. Rondon Pacheco', time: '8 a 10 min' },

  // Zona Norte
  { name: 'Presidente Roosevelt', zone: 'Zona Norte', type: 'Tradicional Residencial e Comercial', landmarks: 'Praça Kasato Maru, Av. Cesário Crosara', time: '15 a 20 min' },
  { name: 'Jardim Brasília', zone: 'Zona Norte', type: 'Residencial Familiar Consolidado', landmarks: 'Próximo ao Bairro Roosevelt e Anel Viário Norte', time: '15 a 20 min' },
  { name: 'São José', zone: 'Zona Norte', type: 'Residencial e Comércios de Bairro', landmarks: 'Região Norte de Uberlândia', time: '15 a 20 min' },
  { name: 'Marta Helena', zone: 'Zona Norte', type: 'Residencial e Comercial Vibrante', landmarks: 'Av. República do Piratini, Próximo à BR-365', time: '15 a 20 min' },
  { name: 'Pacaembu', zone: 'Zona Norte', type: 'Residencial com Casas e Sobrados', landmarks: 'Próximo ao Bairro Santa Rosa e Residencial Gramado', time: '18 a 22 min' },
  { name: 'Santa Rosa', zone: 'Zona Norte', type: 'Residencial e Comercial', landmarks: 'Próximo ao Marta Helena e Parque do Sabiá Norte', time: '18 a 22 min' },
  { name: 'Residencial Gramado', zone: 'Zona Norte', type: 'Residencial Planejado', landmarks: 'Próximo ao Pacaembu e Anel Viário Norte', time: '18 a 25 min' },
  { name: 'Nossa Senhora das Graças', zone: 'Zona Norte', type: 'Residencial Tradicional', landmarks: 'Próximo ao Roosevelt e Minas Gerais', time: '15 a 20 min' },
  { name: 'Distrito Industrial', zone: 'Zona Norte', type: 'Empresarial e Galpões Industriais', landmarks: 'BR-050, Av. Paulo Roberto Cunha Santos', time: '18 a 25 min' },
  { name: 'Maravilha', zone: 'Zona Norte', type: 'Residencial Familiar', landmarks: 'Próximo ao Distrito Industrial e BR-050', time: '18 a 25 min' },

  // Zona Oeste
  { name: 'Tubalina', zone: 'Zona Oeste', type: 'Sede da Matriz Axis Glass e Residencial Nobre', landmarks: 'Av. Sílvio Rugani, Av. Getúlio Vargas, Rio Uberabinha', time: '5 min' },
  { name: 'Jaraguá', zone: 'Zona Oeste', type: 'Residencial Tradicional', landmarks: 'Próximo ao Planalto e Rio Uberabinha', time: '10 a 15 min' },
  { name: 'Planalto', zone: 'Zona Oeste', type: 'Grande Polo Residencial e Comercial', landmarks: 'Av. Imbaúbas, Próximo ao Chácaras Tubalina', time: '10 a 15 min' },
  { name: 'Chácaras Tubalina', zone: 'Zona Oeste', type: 'Chácaras Urbanas e Residências Amplas', landmarks: 'Vizinho à Sede no Tubalina e Av. Sílvio Rugani', time: '5 a 8 min' },
  { name: 'Chácaras Panorama', zone: 'Zona Oeste', type: 'Chácaras e Condomínios Fechados', landmarks: 'Região Oeste com ampla área verde', time: '10 a 15 min' },
  { name: 'Luizote de Freitas', zone: 'Zona Oeste', type: 'Grande Polo Populacional e Comercial', landmarks: 'Av. José Fonseca e Silva, Praça do Luizote', time: '12 a 18 min' },
  { name: 'Jardim das Palmeiras', zone: 'Zona Oeste', type: 'Residencial Consolidado', landmarks: 'Próximo ao Tubalina e Jardim Patrícia', time: '8 a 12 min' },
  { name: 'Jardim Patrícia', zone: 'Zona Oeste', type: 'Residencial com Casas Modernas e Prédios', landmarks: 'Av. Aspirante Mega, Próximo ao Detran', time: '8 a 12 min' },
  { name: 'Jardim Holanda', zone: 'Zona Oeste', type: 'Residencial Moderno e Expansão Urbana', landmarks: 'Próximo ao Jardim Europa e Anel Viário', time: '12 a 16 min' },
  { name: 'Jardim Europa', zone: 'Zona Oeste', type: 'Residencial Familiar e Condomínios', landmarks: 'Região Oeste com rápido acesso à Av. Getúlio Vargas', time: '12 a 16 min' },
  { name: 'Jardim Canaã', zone: 'Zona Oeste', type: 'Residencial com Amplo Comércio Local', landmarks: 'Próximo ao Mansour e Luizote', time: '14 a 18 min' },
  { name: 'Mansour', zone: 'Zona Oeste', type: 'Residencial Tradicional com Alta Demanda', landmarks: 'Próximo ao Bairro Dona Zulmira e Jardim Patrícia', time: '10 a 15 min' },
  { name: 'Dona Zulmira', zone: 'Zona Oeste', type: 'Residencial Consolidado', landmarks: 'Av. José Fonseca e Silva, Próximo à BR-365', time: '12 a 16 min' },
  { name: 'Taiaman', zone: 'Zona Oeste', type: 'Residencial e Sobrados Modernos', landmarks: 'Próximo ao Bairro Dona Zulmira e Tocantins', time: '12 a 16 min' },
  { name: 'Guarani', zone: 'Zona Oeste', type: 'Residencial com Comércio Forte', landmarks: 'Próximo ao Bairro Tocantins e BR-365', time: '14 a 18 min' },
  { name: 'Tocantins', zone: 'Zona Oeste', type: 'Residencial com Casas e Comércios', landmarks: 'Av. Doutor Vicente Salles Guimarães', time: '14 a 18 min' },
  { name: 'Morada do Sol', zone: 'Zona Oeste', type: 'Residencial Familiar', landmarks: 'Próximo ao Bairro Tocantins', time: '15 a 20 min' },
  { name: 'Monte Hebron', zone: 'Zona Oeste', type: 'Novo Bairro Residencial Planejado', landmarks: 'Setor Oeste de Uberlândia', time: '18 a 22 min' },
  { name: 'Residencial Pequis', zone: 'Zona Oeste', type: 'Residencial com Casas Térreas e Reformas', landmarks: 'Próximo ao Monte Hebron', time: '18 a 22 min' },
  { name: 'Morada Nova', zone: 'Zona Oeste', type: 'Residencial Consolidado', landmarks: 'Próximo à BR-497 e Luizote de Freitas', time: '15 a 20 min' },

  // Zona Sul
  { name: 'Cidade Jardim', zone: 'Zona Sul', type: 'Residencial Nobre e Próximo ao Praia Clube', landmarks: 'Av. Ubiratan Honório de Castro, Praia Clube', time: '8 a 10 min' },
  { name: 'Nova Uberlândia', zone: 'Zona Sul', type: 'Residencial Próximo ao Tubalina e Rio', landmarks: 'Próximo à Av. Getúlio Vargas e Cidade Jardim', time: '6 a 8 min' },
  { name: 'Patrimônio', zone: 'Zona Sul', type: 'Residencial Tradicional Nobre', landmarks: 'Av. Francisco Galassi, Próximo ao Praia Clube', time: '6 a 9 min' },
  { name: 'Morada da Colina', zone: 'Zona Sul', type: 'Alto Padrão e Condomínios Fechados', landmarks: 'Av. Francisco Galassi, Próximo ao Bairro Gávea', time: '8 a 12 min' },
  { name: 'Vigilato Pereira', zone: 'Zona Sul', type: 'Residencial Tradicional e Prédios', landmarks: 'Próximo à Av. Rondon Pacheco e Saraiva', time: '8 a 12 min' },
  { name: 'Saraiva', zone: 'Zona Sul', type: 'Residencial Nobre, Clínicas e Edifícios', landmarks: 'Próximo à Av. Rondon Pacheco e Center Shopping', time: '8 a 12 min' },
  { name: 'Lagoinha', zone: 'Zona Sul', type: 'Residencial com Casas e Sobrados', landmarks: 'Próximo ao Bairro Pampulha e Carajás', time: '10 a 14 min' },
  { name: 'Carajás', zone: 'Zona Sul', type: 'Residencial Consolidado', landmarks: 'Próximo ao Bairro Granada e Lagoinha', time: '10 a 14 min' },
  { name: 'Pampulha', zone: 'Zona Sul', type: 'Residencial e Polo Universitário (Unitri)', landmarks: 'Av. Nicomedes Alves dos Santos, Próximo à Unitri', time: '10 a 14 min' },
  { name: 'Jardim Karaíba', zone: 'Zona Sul', type: 'Alto Padrão, Mansões e Condomínios', landmarks: 'Av. Nicomedes Alves dos Santos, Hospital Santa Clara Sul', time: '10 a 14 min' },
  { name: 'Jardim Inconfidência', zone: 'Zona Sul', type: 'Residencial Nobre e Condomínios', landmarks: 'Próximo ao Shopping Park e Jardim Sul', time: '12 a 16 min' },
  { name: 'Santa Luzia', zone: 'Zona Sul', type: 'Residencial com Casas e Comércios', landmarks: 'Próximo ao Granada e São Jorge', time: '12 a 16 min' },
  { name: 'Granada', zone: 'Zona Sul', type: 'Residencial e Comercial em Expansão', landmarks: 'Próximo ao Bairro São Jorge e Av. Sul', time: '12 a 16 min' },
  { name: 'São Jorge', zone: 'Zona Sul', type: 'Grande Polo Residencial e Comercial', landmarks: 'Próximo ao Shopping Park e Laranjeiras', time: '14 a 18 min' },
  { name: 'Laranjeiras', zone: 'Zona Sul', type: 'Residencial Familiar', landmarks: 'Setor Sul de Uberlândia', time: '14 a 18 min' },
  { name: 'Shopping Park', zone: 'Zona Sul', type: 'Residencial Moderno e Expansão', landmarks: 'Próximo ao Uberlândia Shopping e Gávea', time: '12 a 16 min' },
  { name: 'Jardim Sul', zone: 'Zona Sul', type: 'Condomínios Fechados e Casas Modernas', landmarks: 'Próximo ao Jardim Karaíba e Gávea', time: '10 a 14 min' },
  { name: 'Gávea', zone: 'Zona Sul', type: 'Alto Padrão e Edifícios Contemporâneos', landmarks: 'Uberlândia Shopping, Av. Vinhedos, Condomínios Paradiso', time: '10 a 14 min' },

  // Zona Leste
  { name: 'Santa Mônica', zone: 'Zona Leste', type: 'Polo Universitário (UFU) e Prédios Modernos', landmarks: 'Campus Santa Mônica UFU, Av. João Naves de Ávila', time: '10 a 14 min' },
  { name: 'Tibery', zone: 'Zona Leste', type: 'Misto Tradicional com Prédios e Casas', landmarks: 'Center Shopping, Parque do Sabiá, Estádio Municipal', time: '12 a 16 min' },
  { name: 'Segismundo Pereira', zone: 'Zona Leste', type: 'Residencial e Comercial Dinâmico', landmarks: 'Av. Segismundo Pereira, Próximo ao Santa Mônica', time: '12 a 16 min' },
  { name: 'Umuarama', zone: 'Zona Leste', type: 'Campus UFU Umuarama e Hospital das Clínicas', landmarks: 'Hospital de Clínicas da UFU, Av. Floriano Peixoto Leste', time: '12 a 16 min' },
  { name: 'Alto Umuarama', zone: 'Zona Leste', type: 'Residencial Moderno e Condomínios Fechados', landmarks: 'Próximo ao Aeroporto e Granja Marileusa', time: '14 a 18 min' },
  { name: 'Custódio Pereira', zone: 'Zona Leste', type: 'Residencial Consolidado', landmarks: 'Próximo ao Aeroporto e Tibery', time: '12 a 16 min' },
  { name: 'Aclimação', zone: 'Zona Leste', type: 'Residencial com Prédios e Casas Nobres', landmarks: 'Próximo ao Aeroporto e Alto Umuarama', time: '14 a 18 min' },
  { name: 'Mansões Aeroporto', zone: 'Zona Leste', type: 'Chácaras de Luxo e Mansões', landmarks: 'Próximo ao Aeroporto Tenente Coronel Aviador César Bombonato', time: '15 a 20 min' },
  { name: 'Alvorada', zone: 'Zona Leste', type: 'Residencial Tradicional', landmarks: 'Próximo ao Bairro Morumbi e BR-452', time: '14 a 18 min' },
  { name: 'Novo Mundo', zone: 'Zona Leste', type: 'Residencial Moderno e Expansão', landmarks: 'Próximo ao Santa Mônica Leste e Anel Viário', time: '14 a 18 min' },
  { name: 'Morumbi', zone: 'Zona Leste', type: 'Grande Polo Residencial e Comercial', landmarks: 'Setor Leste com forte densidade populacional', time: '15 a 20 min' },
  { name: 'Residencial Integração', zone: 'Zona Leste', type: 'Residencial com Casas e Sobrados', landmarks: 'Próximo ao Bairro Morumbi', time: '16 a 20 min' },
  { name: 'Jardim Ipanema', zone: 'Zona Leste', type: 'Residencial em Crescimento', landmarks: 'Próximo ao Morumbi e Novo Mundo', time: '16 a 20 min' },
  { name: 'Portal do Vale', zone: 'Zona Leste', type: 'Bairro Planejado Moderno', landmarks: 'Próximo ao Granja Marileusa e BR-050', time: '16 a 20 min' },
  { name: 'Granja Marileusa', zone: 'Zona Leste', type: 'Polo de Inovação, Condomínios de Luxo e Prédios Corporativos', landmarks: 'Parque Tecnológico, Av. Floriano Peixoto Norte, Condomínio Solar', time: '15 a 20 min' },
  { name: 'Grand Ville', zone: 'Zona Leste', type: 'Condomínios Fechados e Casas de Alto Padrão', landmarks: 'Setor Leste Nobre próximo ao Granja Marileusa', time: '15 a 20 min' },
];

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const formatted = rawNeighborhoods.map((item, idx) => {
  const slug = slugify(item.name);
  return {
    id: idx + 1,
    name: item.name,
    slug: slug,
    zone: item.zone,
    type: item.type,
    landmarks: item.landmarks,
    time: item.time,
    description: `Atendimento técnico de vidraçaria no bairro ${item.name} em Uberlândia. Soluções completas em box de banheiro, cortinas de vidro para sacadas, esquadrias de alumínio sob medida, espelhos e manutenções com medição a laser gratuita para ${item.name}.`,
    highlights: [
      `Deslocamento ágil com tempo médio de ${item.time} a partir da sede no Tubalina`,
      `Medição a laser sem custo de visita para imóveis no ${item.name}`,
      `Vidros temperados e laminados homologados pelas normas ABNT NBR 14207 e 14718`,
      `Garantia documentada de vedação, funcionamento e pós-venda dedicado no ${item.name}`
    ]
  };
});

console.log('Total neighborhoods processed:', formatted.length);

const outStr = `// Catálogo Completo dos 73 Bairros de Uberlândia - MG
// Vidraçaria Axis Glass - Atendimento Técnico com Medição a Laser Gratuita

export interface NeighborhoodData {
  id: number;
  name: string;
  slug: string;
  zone: string;
  type: string;
  landmarks: string;
  time: string;
  description: string;
  highlights: string[];
}

export const NEIGHBORHOODS: NeighborhoodData[] = ${JSON.stringify(formatted, null, 2)};

export default NEIGHBORHOODS;
`;

fs.writeFileSync(path.join('src', 'data', 'neighborhoodsData.ts'), outStr, 'utf-8');
console.log('Successfully written to src/data/neighborhoodsData.ts');
