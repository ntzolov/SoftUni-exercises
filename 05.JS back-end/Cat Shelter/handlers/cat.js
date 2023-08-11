const fs = require('fs');
const path = require('path');
const url = require('url');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');
const { json } = require('formidable');
const prom = require('fs/promises');

module.exports = (req, res) => {
  const pathName = req.url;

  if (pathName === '/cats/add-cat' && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain',
        });

        res.write('Not found!');
        res.end();
      }

      const htmlData = data;

      fs.readFile('./data/breeds.json', (err, data) => {
        if (err) {
          throw err;
        }

        let breeds = JSON.parse(data);
        const breedsPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
        const modifiedData = htmlData.toString().replace('{{catBreeds}}', breedsPlaceholder);

        res.writeHead(200, {
          'Content-Type': 'text/html',
        });

        res.write(modifiedData);
        res.end();
      });
    });
  } else if (pathName === '/cats/add-cat' && req.method === 'POST') {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        throw err;
      }

      let oldPath = files.upload[0].filepath;
      let newPath = path.normalize(path.join(__dirname, '../content/images/' + files.upload[0].originalFilename));

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          throw err;
        }

        console.log('Files was successfully uploaded!');
      });

      fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }

        let allCats = JSON.parse(data);
        allCats.push({
          id: allCats.length + 1,
          name: fields.name[0],
          description: fields.description[0],
          breed: fields.breed[0],
          image: files.upload[0].originalFilename,
        });
        let json = JSON.stringify(allCats);

        fs.writeFile('./data/cats.json', json, () => {
          res.writeHead(301, { location: '/' });
          res.end();
        });
      });
    });
  } else if (pathName === '/cats/add-breed' && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain',
        });

        res.write('Not found!');
        res.end();
      }

      res.writeHead(200, {
        'Content-Type': 'text/html',
      });

      res.write(data);
      res.end();
    });
  } else if (pathName === '/cats/add-breed' && req.method === 'POST') {
    let formData = '';
    req.on('data', (data) => {
      formData += data;
    });

    req.on('end', () => {
      let body = qs.parse(formData);

      fs.readFile('./data/breeds.json', (err, data) => {
        if (err) {
          throw err;
        }

        let breeds = JSON.parse(data);
        breeds.push(body.breed);
        let json = JSON.stringify(breeds);

        fs.writeFile('./data/breeds.json', json, 'utf-8', () => console.log('Successfully added new breed!'));

        res.writeHead(301, { location: '/' });
        res.end();
      });
    });
  } else {
    return true;
  }
};
