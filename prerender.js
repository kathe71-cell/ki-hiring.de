import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const ROUTES = [
  {
    url: '/',
    title: 'KI-Hiring Plattform & Matching | ki-hiring.de',
    desc: 'Präzisions-Matching für KI-Talente und Unternehmen. Evidenzbasierte Eignungsanalyse und Skills-Validierung.'
  },
  {
    url: '/praxistest',
    title: 'KI-Recruiting Simulator & Praxistest | ki-hiring.de',
    desc: 'Interaktiver Simulator für KI-gestütztes Hiring. Testen Sie Matching-Algorithmen und Eignungsanalysen live.'
  },
  {
    url: '/methode',
    title: 'Wissenschaftliche Methodik & Evidenz | ki-hiring.de',
    desc: 'Die Methodik hinter unserem KI-Matching: Kompetenz-Matrix, Validierung und wissenschaftliche Standards.'
  },
  {
    url: '/faq',
    title: 'Häufig gestellte Fragen (FAQ) | ki-hiring.de',
    desc: 'Antworten zu Datenschutz, KI-Ethik, Algorithmen und Ablauf des KI-Recruitings.'
  },
  {
    url: '/team-matrix',
    title: 'Team Gap Explorer & Matrix | ki-hiring.de',
    desc: 'Analysieren Sie Skill-Gaps im Team und finden Sie exakt passende KI-Talente für Ihr Anforderungsprofil.'
  },
  {
    url: '/kostenmodell',
    title: 'ROI-Rechner & Kostenmodell | ki-hiring.de',
    desc: 'Berechnen Sie den ROI und die Kostenvorteile von KI-gestütztem Hiring gegenüber traditionellem Recruiting.'
  },
  {
    url: '/fuer-talente',
    title: 'Für KI-Talente & Kandidaten | ki-hiring.de',
    desc: 'Faire Eignungsprüfung ohne Bias. Zeigen Sie Ihre echten Skills und finden Sie Top-KI-Positionen.'
  },
  {
    url: '/impressum',
    title: 'Impressum | ki-hiring.de',
    desc: 'Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 DDG von ki-hiring.de.'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung | ki-hiring.de',
    desc: 'Datenschutzhinweise und DSGVO-Informationen für ki-hiring.de.'
  }
];

console.log(`Prerendering ${ROUTES.length} routes for ki-hiring.de...`);

for (const route of ROUTES) {
  try {
    const appHtml = render(route.url);
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);

    const canonicalUrl = `https://www.ki-hiring.de${route.url === '/' ? '/' : route.url}`;
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const fullPath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, html);
    console.log(`  ✓ ${route.url} -> ${filePath} (${(html.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
    process.exit(1);
  }
}

console.log('Static Site Prerendering complete!');
