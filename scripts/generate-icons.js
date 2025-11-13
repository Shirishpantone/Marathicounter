import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, '../public/icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const svgTemplate = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)"/>
  <text x="50%" y="40%" text-anchor="middle" font-size="${size * 0.3}" font-weight="bold" fill="white" font-family="Arial">मर</text>
  <text x="50%" y="70%" text-anchor="middle" font-size="${size * 0.15}" font-weight="bold" fill="white" font-family="Arial">Counter</text>
</svg>`;

sizes.forEach(size => {
  const filename = `icon-${size}x${size}.svg`;
  const filepath = path.join(iconsDir, filename);
  fs.writeFileSync(filepath, svgTemplate(size));
  console.log(`Created ${filename}`);
});

const pngFilename = 'icon-192x192.png';
const pngPath = path.join(iconsDir, pngFilename);
if (!fs.existsSync(pngPath)) {
  fs.writeFileSync(pngPath, '');
  console.log(`Created placeholder ${pngFilename}`);
}

console.log('Icon generation complete!');
