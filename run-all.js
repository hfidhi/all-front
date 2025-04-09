// run-all.js
const { exec } = require('child_process');
const path = require('path');

console.log('🚀 Starting all projects...');

// Updated with your EXACT folder paths
const PROJECTS = [
  { 
    name: 'Landing', 
    folder: 'share-v-fr/sharevest-frontend-main', // Your exact nested structure
    port: 3001,
    urlPath: '/' 
  },
  { 
    name: 'Login', 
    folder: 'login2/project', // Matches your folder with space
    port: 3002,
    urlPath: '/login'
  },
  { 
    name: 'Dashboard', 
    folder: 'dashboard', // Fixed typo from "dashdoard"
    port: 3003,
    urlPath: '/dashboard'
  }
];

function runProject(project) {
  const fullPath = path.join(__dirname, project.folder);
  
  console.log(`\n🔧 Starting ${project.name} in ${project.folder}...`);
  console.log(`📂 Full path: ${fullPath}`);

  const child = exec(`cd "${fullPath}" && npm run dev -- --port ${project.port}`, {
    windowsHide: true
  });
  
  child.stdout.on('data', (data) => {
    process.stdout.write(`[${project.name}] ${data}`);
  });
  
  child.stderr.on('data', (data) => {
    process.stderr.write(`[${project.name} ERROR] ${data}`);
  });
  
  child.on('close', (code) => {
    console.log(`[${project.name}] Process exited with code ${code}`);
  });
}

// Start all projects
PROJECTS.forEach(runProject);

console.log(`
🌐 Access projects at:
${PROJECTS.map(p => `- ${p.name}: http://localhost:${p.port}${p.urlPath}`).join('\n')}

🔗 Proxied URLs (via Landing):
- Login: http://localhost:3001/login
- Dashboard: http://localhost:3001/dashboard
`);