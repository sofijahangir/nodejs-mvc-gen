const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const prettier = require('prettier');

function generateProjectStructure(projectName) {
  const baseDir = path.join(process.cwd(), projectName);

  // Create the main project directory
  fs.mkdirSync(baseDir);

  // Create config directory and db_credientials.js
  const configDir = path.join(baseDir, 'config');
  fs.mkdirSync(configDir);
  const dbCredentialsCode = `
    // db_credentials.js content
    // You can place your database credentials here
    `;
  fs.writeFileSync(path.join(configDir, 'db_credentials.js'), dbCredentialsCode.trim());

  // Create testproj-api directory
  const apiDir = path.join(baseDir, `${projectName}-api`);
  fs.mkdirSync(apiDir);

  const appJsCode = `
    const express = require('express');
    const app = express();

    // Your routes and middleware setup can go here

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(\`Server is running on port \${PORT}\`);
    });
    `;

  const formattedAppJsCode = prettier.format(appJsCode, { parser: 'babel' });

  fs.writeFileSync(path.join(apiDir, 'app.js'), formattedAppJsCode);

  // Install dependencies in the api directory
  try {
    console.log('Installing packages...');
    execSync('npm init -y && npm install express dotenv', { cwd: apiDir, stdio: 'inherit' });
    console.log('Packages installed successfully.');
  } catch (error) {
    console.error('Error installing packages:', error);
  }
}

module.exports = generateProjectStructure;
