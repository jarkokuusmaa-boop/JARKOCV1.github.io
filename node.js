const fs = require('fs');
const path = require('path');

const imagesFolder = path.join(__dirname, 'images/portraits');
const outputFolder = path.join(__dirname, 'js');

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const album = fs.readdirSync(imagesFolder)
  .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
  .map(file => `images/portraits/${file}`);

// Just define album; do NOT export
const jsContent = `const album = ${JSON.stringify(album, null, 2)};`;

fs.writeFileSync(path.join(outputFolder, 'generatedAlbum.js'), jsContent);

console.log('generatedAlbum.js file created with image paths');