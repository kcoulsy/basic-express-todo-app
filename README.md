# Basic Express Todo App (TypeScript)

This is a basic Express app written in TypeScript to demonstrate GET and POST functionality for a todo app. It utilizes Handlebars as a template engine and stores all todos in memory, as databases were not part of the scope for this project. The app includes 404 error handling and basic BEM styling for the frontend.


![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZocWN2NXdpMHVyamFmZ2plZmdnYjZkMGFoMW9qeXl2ZDYwdmg3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kNV6oRSnLJWnKXqswd/giphy.gif)

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/kcoulsy/basic-express-todo-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd basic-express-todo-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

### Development Mode

To run the app in development mode with automatic code reloading, use:

```bash
npm run dev
```

### Production Mode

To build and start the app in production mode, use:

```bash
npm run build && npm start
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

### Docker usage

To build the docker image run 
```bash
docker build -t basic-express-todo-app .
```

Then to run the docker image
```bash
docker run -dp 127.0.0.1:3000:3000 basic-express-todo-app
```

or just pull the image straight from [DockerHub](https://hub.docker.com/r/kcoulsy/basic-express-todo-app) 
```bash
docker run -dp 127.0.0.1:3003:3000 kcoulsy/basic-express-todo-app
```
No environment variables are needed.

## Features

- **GET /todos**: Retrieves all todos.
- **POST /todos**: Adds a new todo.
- **GET /todos/:id**: Retrieve a single todo
- **404 Error Handling**: Custom error page for 404 errors.
- **Handlebars Templating**: Uses Handlebars as the template engine.
- **BEM Styling**: Basic BEM (Block, Element, Modifier) styling for frontend elements.

## Project Structure

```
├── src/
│   ├── public/
│   │   ├── styles/
│   │   │   ├── norrmalise.css
│   │   │   ├── style.css
│   ├── services/
│   │   ├── todos.ts
│   ├── views/
│   │   ├── partials/
│   │   │   ├── layout.hbs
│   │   ├── error.hbs
│   │   ├── index.hbs
│   │   ├── todo.hbs
│   ├── index.ts
│   ├── errors.ts
├── .gitignore
├── nodemon.json
├── package-lock.json
├── package.json
├── tsconfig.json
├── README.md
```

## Contributing

Feel free to open issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.