const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!!!!!!');
};

const server = http.createServer(requestListener);
server.listen(3000, () => {
  console.log('Server running on port 3000');
});