import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const logoPath = join(publicDir, "Logo.png");

const { data, info } = await sharp(logoPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = Buffer.from(data);

for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  const a = pixels[i + 3];

  // Remove white matte fringe (exported as semi-transparent white outside the circle)
  if (r > 250 && g > 250 && b > 250 && a < 255) {
    pixels[i + 3] = 0;
  }
}

await sharp(pixels, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(logoPath);

for (const size of [32, 48, 192]) {
  await sharp(logoPath)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(publicDir, size === 192 ? "apple-icon.png" : `favicon-${size}.png`));
}

console.log("Logo alpha fixed and favicons regenerated");
