// scripts/optimize-images.js
const sharp = require("sharp");
const fs    = require("fs");
const path  = require("path");

const INPUT_DIR  = "./public/image";
const EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".tiff", ".bmp"];

function getAllFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  });
  return files;
}

async function convertToWebP() {
  const files = getAllFiles(INPUT_DIR);
  const images = files.filter((f) =>
    EXTENSIONS.includes(path.extname(f).toLowerCase())
  );

  console.log(`\n Found ${images.length} images to convert...\n`);

  let converted = 0;
  let skipped   = 0;

  for (const file of images) {
    const webpPath = file.replace(/\.(png|jpg|jpeg|gif|tiff|bmp)$/i, ".webp");

    // Skip if webp already exists
    if (fs.existsSync(webpPath)) {
      console.log(`⏭  Skipped (already exists): ${path.basename(webpPath)}`);
      skipped++;
      continue;
    }

    try {
      await sharp(file)
        .webp({ quality: 82 })  // 82 = great quality, small size
        .toFile(webpPath);

      const originalSize = (fs.statSync(file).size / 1024).toFixed(1);
      const webpSize     = (fs.statSync(webpPath).size / 1024).toFixed(1);
      const saving       = (((originalSize - webpSize) / originalSize) * 100).toFixed(0);

      console.log(`✓  ${path.basename(file)} → ${path.basename(webpPath)} | ${originalSize}KB → ${webpSize}KB (${saving}% smaller)`);
      converted++;
    } catch (err) {
      console.error(`✗  Failed: ${file} — ${err.message}`);
    }
  }

  console.log(`\n Done! ${converted} converted, ${skipped} skipped.\n`);
}

convertToWebP();