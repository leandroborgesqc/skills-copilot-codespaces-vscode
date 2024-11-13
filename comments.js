// Create web server
// Create a function that will be called when a request is made to the server
// The function will return a response with the comments as the body
// Start the server on port 3000
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(comments.getComments());
});

server.listen(3000, 'localhost', () => {
  console.log('Server running on http://localhost:3000');
});
