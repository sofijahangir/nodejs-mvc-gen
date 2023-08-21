# Node MVC Generator

Node Fullstack Generator is a command-line tool that helps you quickly generate a complete Node.js project structure with controllers, routers, models, and more.

## Installation

You can install the package globally using npm:

```bash
npm install -g node-mvc-gen
```

# Usage
Generate a new project structure by running the following command:
  
  ```bash
  generate <project-name>
  ```
  Replace <project-name> with the desired name for your project.

# Features
## Features

- **Project Structure:** Automatically generate directories for controllers, routers, models, middleware, and more.
- **Express Setup:** Get started quickly with a basic app.js file that sets up an Express application.
- **Dependencies:** Automatically installs required packages like Express and dotenv.
- **Customization:** You can extend the generated structure and add your own code as needed.

# What's Included
The generated project structure includes the following components:
- Controllers (v1, v2, v3)
- Routes (v1, v2, v3)
- Models
- Middleware
- Configuration files (db_connection.js)
- Basic app.js with Express setup

# Dependencies
- **Express:** Fast, unopinionated, minimalist web framework for Node.js.
- **dotenv:** Zero-dependency module that loads environment variables from a .env file.
- **fs-extra:** Adds file system methods that are not included in the native fs module.
- **execa:** A better child_process.

# Contributing
Contributions are welcome! Feel free to fork and submit pull requests to improve this project.

# License
[MIT](https://choosealicense.com/licenses/mit/)