const fs = require('fs');
const path = require('path');

function getContentType(url) {
  if (url.endsWith('css')) {
    return 'text/css';
  } else if (url.endsWith('html')) {
    return 'text/html';
  } else if (url.endsWith('png')) {
    return 'image/png';
  } else if (url.endsWith('jpeg')) {
    return 'image/jpeg';
  } else if (url.endsWith('jpg')) {
    return 'image/jpg';
  } else if (url.endsWith('ico')) {
    return 'image/x-icon';
  } else if (url.endsWith('js')) {
    return 'text/javascript';
  }
}

module.exports = (req, res) => {
  const pathName = req.url;

  if (pathName.startsWith('/content') && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '..', pathName));

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain',
        });

        res.write('Not found!');
        res.end();
      }

      res.writeHead(200, {
        'Content-Type': getContentType(pathName),
      });

      res.write(data);
      res.end();
    });
  } else {
    return true;
  }
};
