// Builds optimized portrait assets + the social share image.
// pic.png    = background-removed portrait cutout (transparent PNG)
// banner.jpg = "Welcome to the portfolio" banner, used as the social share (og) image
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

for (const w of [1100, 720, 420]) {
  await sharp('pic.png').ensureAlpha().resize({ width: w, kernel: 'lanczos3' }).webp({ quality: 88, alphaQuality: 92 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image: 1200x630
await sharp('banner.jpg').resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 88 }).toFile(`${OUT}/og-image.jpg`);
console.log('images built');
