# Crypto Cupid

Crypto Cupid is a full-stack application that allow people swiping and matching with other people on blockchain.

## Project Structure

- **server/**: Contains the server-side code.
- **client/**: Contains the client-side code, built with Create React App.

## Requirements

- [Bun CLI](https://bun.sh/docs/installation)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Available Scripts

In the project root directory, you can run:

### `bun run install`

Installs all dependencies for both the server and client.

### `bun run start:all`

Starts both the server and client concurrently.

### `bun run start:server`

Starts the server only.

### `bun run start:client`

Starts the client only.

## Client

The client is a React application bootstrapped with Create React App.

### Available Scripts in Client

In the `client` directory, you can run:

- **`bun run start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **`bun run build`**: Builds the app for production to the `build` folder.
- **`bun run test`**: Launches the test runner in the interactive watch mode.
- **`bun run eject`**: Ejects the app, providing full control over the configuration files.

## Server

The server is set up to run with Bun. Ensure you have Bun installed to run the server scripts.

## Environment Variables

Environment variables can be set in `.env` files, which are ignored by Git as specified in the `.gitignore`.

## Learn More

For more information on Create React App, visit the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

For more information on Bun, visit the [Bun documentation](https://bun.sh/docs).
