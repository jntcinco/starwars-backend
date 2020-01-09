## Backend service or API for Starwars Test
## dependencies used
express: Express is a fast and lightweight web framework for Node.js. Express is an essential part of the MERN stack.
body-parser: Node.js body parsing middleware.
cors: CORS is a node.js package for providing an Express middleware that can be used to enable CORS with various options. Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
mongoose: A Node.js framework which lets us access MongoDB in an object-oriented way.
nodemon: Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. We’ll use nodemon when running our Node.js server in the next steps.

## Add npm dependencies to package.json
npm install express body-parser cors mongoose

## install global package
npm install -g nodemon

## Start nodemon
nodemon server