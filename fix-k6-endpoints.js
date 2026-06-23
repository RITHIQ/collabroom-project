const fs = require('fs');
const path = require('path');

// Fix 1: All k6 scripts hit /test which doesn't exist in db.json
// json-server creates endpoints from db.json keys: /users /campaigns /contracts etc.
// Change all http.get calls from /test to /users

const k6Dirs = [
  path.join(__dirname, 'load-tests', 'web'),
  path.join(__dirname, 'load-tests', 'mobile'),
  path.join(__dirname, 'load-tests', 'web', 'scenarios'),
  path.join(__dirname, 'load-tests', 'mobile', 'scenarios'),
];

let fixedFiles = 0;
k6Dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => {
    const fp = path.join(dir, f);
    let content = fs.readFileSync(fp, 'utf8');
    // Fix web port 3001 /test → /users
    content = content.replace(/http\.get\('http:\/\/localhost:3001\/test'\)/g, "http.get('http://localhost:3001/users')");
    // Fix mobile port 3002 /test → /users  
    content = content.replace(/http\.get\('http:\/\/localhost:3002\/test'\)/g, "http.get('http://localhost:3002/users')");
    fs.writeFileSync(fp, content);
    fixedFiles++;
    console.log(`Fixed: ${f}`);
  });
});

// Fix 2: Regenerate package-lock.json for selenium-tests without chrome deps
// (done by running npm install after this)

console.log(`\nFixed ${fixedFiles} k6 script files.`);
