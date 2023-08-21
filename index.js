const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function generateProjectStructure(projectName) {
  const baseDir = path.join(process.cwd(), projectName);

  const dirs = [
    'controllers/v1',
    'controllers/v2',
    'controllers/v3',
    'routes/v1',
    'routes/v2',
    'routes/v3',
    'src/Model',
    'src/middleware',
    'config'
  ];

  dirs.forEach((dir) => {
    fs.mkdirSync(path.join(baseDir, dir), { recursive: true });
  });

  // Generate db_connection.js
  const dbConnectionPath = path.join(baseDir, 'config/db_connection.js');
  const dbConnectionCode = `
    // db_connection.js content
    // You can place your database connection code here
    `;
  fs.writeFileSync(dbConnectionPath, dbConnectionCode.trim());

  // Generate package.json
  const packageJsonPath = path.join(baseDir, 'package.json');
  const packageJsonContent = JSON.stringify({
    name: projectName,
    version: '1.0.0',
    main: 'app.js',
    scripts: {
      start: 'node app.js'
    },
    dependencies: {
      "express": "^4.17.1",
      "dotenv": "^10.0.0"
    }
    // Add more fields as needed
  }, null, 2);
  fs.writeFileSync(packageJsonPath, packageJsonContent);

  // Generate app.js
  const appJsPath = path.join(baseDir, 'app.js');
  const appJsCode = `
    const express = require('express');
    const dotenv = require('dotenv');
    const path = require('path');

    // Load environment variables from .env file
    dotenv.config();

    const app = express();

    // Your middleware and route setup can go here

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(\`Server is running on port \${PORT}\`);
    });
    `;
  fs.writeFileSync(appJsPath, appJsCode.trim());

  // Install packages
  try {
    console.log('Installing packages...');
    execSync('npm install', { cwd: baseDir, stdio: 'inherit' });
    console.log('Packages installed successfully.');
  } catch (error) {
    console.error('Error installing packages:', error);
  }
}

module.exports = generateProjectStructure;
