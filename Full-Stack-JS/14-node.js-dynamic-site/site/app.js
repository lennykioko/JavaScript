const router = require("./router.js");

const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
