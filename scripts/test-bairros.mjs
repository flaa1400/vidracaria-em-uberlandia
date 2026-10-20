import fs from 'fs';

const rawList = `
Centro de Uberlândia, 
Fundinho em Uberlândia, 
Nossa Senhora Aparecida em Uberlândia,, 
Martins em Uberlândia,, 
Bom Jesus em Uberlândia,
Brasil em Uberlândia,
Cazeca em Uberlândia,
Lídice em Uberlândia,
Tabajaras em Uberlândia,
Presidente Roosevelt,
Jardim Brasília em Uberlândia,,
São José em Uberlândia,,
Marta Helena em Uberlândia,,
Pacaembu em Uberlândia,,
Santa Rosa em Uberlândia,,
Residencial Gramado em Uberlândia,,
Nossa Senhora das Graças em Uberlândia,,
Distrito Industrial em Uberlândia,,
Maravilha em Uberlândia,,
Jaraguá em Uberlândia,,
Planalto em Uberlândia,,
Chácaras Tubalina em Uberlândia,,
Chácaras Panorama em Uberlândia,,
Luizote de Freitas em Uberlândia,,
Jardim das Palmeiras em Uberlândia,,
Jardim Patrícia em Uberlândia,,
Jardim Holanda em Uberlândia,,
Jardim Europa em Uberlândia,,
Jardim Canaã em Uberlândia,,
Mansour em Uberlândia,,
Dona Zulmira em Uberlândia,,
Taiaman em Uberlândia,,
Guarani em Uberlândia,,
Tocantins em Uberlândia,,
Morada do Sol em Uberlândia,,
Monte Hebron em Uberlândia,,
Residencial Pequis em Uberlândia,,
Morada Nova em Uberlândia,,
Tubalina em Uberlândia,,
Cidade Jardim em Uberlândia,,
Nova Uberlândia em Uberlândia,,
Patrimônio em Uberlândia,,
Morada da Colina em Uberlândia,,
Vigilato Pereira em Uberlândia,,
Saraiva em Uberlândia,,
Lagoinha em Uberlândia,,
Carajás em Uberlândia,,
Pampulha em Uberlândia,,
Jardim Karaíba em Uberlândia,,
Jardim Inconfidência,
Santa Luzia em Uberlândia,,
Granada em Uberlândia,,
São Jorge em Uberlândia,,
Laranjeiras em Uberlândia,,
Shopping Park em Uberlândia,
Jardim Sul em Uberlândia,
Gávea em Uberlândia,
Santa Mônica em Uberlândia,
Tibery em Uberlândia,
Segismundo Pereira em Uberlândia,
Umuarama em Uberlândia,
Alto Umuarama em Uberlândia,
Custódio Pereira em Uberlândia,
Aclimação em Uberlândia,
Mansões Aeroporto em Uberlândia,
Alvorada em Uberlândia,
Novo Mundo em Uberlândia,
Morumbi em Uberlândia,
Residencial Integração em Uberlândia,
Jardim Ipanema em Uberlândia,
Portal do Vale em Uberlândia,
Granja Marileus em Uberlândia,
Grand Ville em Uberlândia
`;

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

const cleaned = rawList
  .split(',')
  .map(item => item.trim())
  .filter(item => item.length > 0)
  .map(item => {
    let name = item.replace(/\s+em\s+Uberlândia$/i, '').replace(/\s+de\s+Uberlândia$/i, '').trim();
    if (name === 'Granja Marileus') name = 'Granja Marileusa';
    return name;
  });

// Deduplicate
const uniqueMap = new Map();
cleaned.forEach(name => {
  const slug = slugify(name);
  if (!uniqueMap.has(slug)) {
    uniqueMap.set(slug, name);
  }
});

console.log('Total unique bairros:', uniqueMap.size);
for (const [slug, name] of uniqueMap.entries()) {
  console.log(`${slug} -> ${name}`);
}
