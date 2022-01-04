# ku furu barnaamijka init

 ka dib waxaa kuu samaysmayo labo file oo config ah 1.package-json 2.package-log-json.


 {
  "name": "barasho",
  "version": "1.0.0",
  "description": "barashada node,js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mohiaden"
  },
  "keywords": [
    "node.js"
  ],
  "author": "Mohiaden Mohamooud Muxudiinkeey",
  "license": "ISC"
}

 ## faahfaahin koodahan hoose ka bilow fahamka.

 ```javascript
// http heeb ayaa loobaahanyahay
const http = require('http');
//host mooro loogu soo hagaago ayuu u baahanyahay iyo surin loo maro.

const hostname = '127.0.0.1';
Albaab
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



 ```
