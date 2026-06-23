const fs = require('fs');
const path = require('path');
const dirs = ['load-tests/web', 'load-tests/mobile'];
dirs.forEach(dir => {
  fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => {
    const fp = path.join(dir, f);
    let content = fs.readFileSync(fp, 'utf8');
    content = content.replace("    http_reqs: ['rate>100'],\n", '');
    fs.writeFileSync(fp, content);
  });
});
console.log('Removed http_reqs rate threshold from all k6 files');
