const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

// Directory containing SVG files
const svgDir = './svgs';

// SVGO configuration to inline styles
const svgoConfig = {
  plugins: [
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: false,
      },
    },
  ],
};

// Function to process SVG files
function processSVGFiles() {
  fs.readdir(svgDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      if (path.extname(file) === '.svg') {
        const filePath = path.join(svgDir, file);
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading file:', err);
            return;
          }

          const result = optimize(data, { path: filePath, ...svgoConfig });

          fs.writeFile(filePath, result.data, (err) => {
            if (err) {
              console.error('Error writing file:', err);
            } else {
              console.log(`Processed: ${file}`);
            }
          });
        });
      }
    });
  });
}

processSVGFiles();
