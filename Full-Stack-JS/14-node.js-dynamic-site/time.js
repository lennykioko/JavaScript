const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  setInterval( () => {
    response.write(new Date + "\n");
  }, 1000);
  // response.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});