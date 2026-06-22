import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const outPath192 = path.join(__dirname, 'public', 'pwa-192x192.png');
const outPath512 = path.join(__dirname, 'public', 'pwa-512x512.png');

async function generateIcons() {
  try {
    if (!fs.existsSync(svgPath)) {
      console.error('favicon.svg not found in public directory.');
      return;
    }

    await sharp(svgPath)
      .resize(192, 192)
      .png()
      .toFile(outPath192);
    console.log('Generated pwa-192x192.png');

    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(outPath512);
    console.log('Generated pwa-512x512.png');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
