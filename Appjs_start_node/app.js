const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // 'text/html' waa ka dhigikaraa hada waa text kaliya
  res.end('waan imid shaashada ok express http waa ok app.js waa shaqeeyay darsiga  koowaad ok');
});

server.listen(port, hostname, () => {
  console.log(`Server waaaa darsigii koowaad http://${hostname}:${port}/`);
});