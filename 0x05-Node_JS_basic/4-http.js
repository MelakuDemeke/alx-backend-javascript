const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(responseText),
  });

  res.end(responseText);
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});

module.exports = server;
