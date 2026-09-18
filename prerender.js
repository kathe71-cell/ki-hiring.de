import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

console.log('Prerendering ki-hiring.de root route...');
const appHtml = render();
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

fs.writeFileSync(toAbsolute('dist/index.html'), html);
console.log(`  ✓ / -> dist/index.html (${(html.length / 1024).toFixed(1)} kB)`);
console.log('Static Site Prerendering complete!');
