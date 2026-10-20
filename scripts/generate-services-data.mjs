import fs from 'fs';
import path from 'path';

const dir = path.join('src', 'content', 'servicos');
const files = fs.readdirSync(dir);

const services = files.map(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const slug = file.replace('.md', '');
  
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const badgeMatch = content.match(/badge:\s*"([^"]+)"/);
  const descMatch = content.match(/description:\s*"([^"]+)"/);
  const orderMatch = content.match(/order:\s*(\d+)/);
  
  // Extract features
  const features = [];
  const featMatches = content.match(/- "([^"]+)"/g);
  if (featMatches) {
    featMatches.forEach(m => {
      features.push(m.replace(/- "/, '').replace(/"$/, ''));
    });
  }

  const rawTitle = titleMatch ? titleMatch[1] : slug;
  // Clean title for neighborhood appending (e.g., "Box para Banheiro" instead of "Box para Banheiro em Uberlândia")
  const baseTitle = rawTitle.replace(/\s+em\s+Uberlândia$/i, '');

  return {
    slug,
    title: baseTitle,
    fullTitle: rawTitle,
    badge: badgeMatch ? badgeMatch[1] : 'Especialidade',
    description: descMatch ? descMatch[1] : '',
    order: orderMatch ? parseInt(orderMatch[1]) : 0,
    features: features.slice(0, 5)
  };
});

services.sort((a, b) => a.order - b.order);

const outStr = `// Catálogo Completo dos 15 Serviços da Vidraçaria Axis Glass em Uberlândia

export interface ServiceData {
  slug: string;
  title: string;
  fullTitle: string;
  badge: string;
  description: string;
  order: number;
  features: string[];
}

export const SERVICES_LIST: ServiceData[] = ${JSON.stringify(services, null, 2)};

export default SERVICES_LIST;
`;

fs.writeFileSync(path.join('src', 'data', 'servicesData.ts'), outStr, 'utf-8');
console.log('Successfully generated src/data/servicesData.ts with', services.length, 'services!');
