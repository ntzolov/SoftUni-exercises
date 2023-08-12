const http = require('http');
const handlers = require('./handlers');

http
  .createServer((req, res) => {
    for (let handler of handlers) {
      if (!handler(req, res)) {
        break;
      }
    }
  })
  .listen(5000, () => console.log('Server is listening on port 5000... '));
