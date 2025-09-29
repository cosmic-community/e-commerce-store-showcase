const fs = require('fs');
const path = require('path');

const scriptContent = fs.readFileSync(
  path.join(__dirname, '..', 'public', 'dashboard-console-capture.js'),
  'utf8'
);

const scriptTag = `<script>${scriptContent}</script>`;

function injectScript(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture')) return;
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${scriptTag}\n</head>`);
  } else if (content.includes('</body>')) {
    content = content.replace('</body>', `${scriptTag}\n</body>`);
  } else {
    return;
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected console capture script into ${filePath}`);
}

const outDir = path.join(__dirname, '..', '.next', 'server', 'app');
if (fs.existsSync(outDir)) {
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        injectScript(filePath);
      }
    });
  }
  processDirectory(outDir);
}

console.log('Console capture script injection complete');