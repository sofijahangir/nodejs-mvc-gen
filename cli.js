#!/usr/bin/env node

const generateProjectStructure = require('./index');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a project name.');
} else {
  const projectDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectDir)) {
    console.error('A directory with the same name already exists.');
  } else {
    fs.mkdirSync(projectDir);
    process.chdir(projectDir);
    generateProjectStructure(projectName);
    console.log(`Project structure for ${projectName} generated successfully in ${projectDir}.`);
  }
}
