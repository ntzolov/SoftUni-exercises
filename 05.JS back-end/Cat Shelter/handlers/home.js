const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

module.exports = (req, res) => {
  const pathName = req.url;

  if (pathName === '/' && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/index.html'));

    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }

      const htmlData = data;

      fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }

        let cats = JSON.parse(data);

        const modifiedCats = cats.map(
          (cat) => `<li>
        <img src="${path.join('./content/images/' + cat.image)}"
            alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
            <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
        </ul>
    </li>`
        );

        const modifiedHTML = htmlData.toString().replace('{{cats}}', modifiedCats);

        res.writeHead(200, {
          'Content-Type': 'text/html',
        });

        res.write(modifiedHTML);
        res.end();
      });
    });
  } else if (pathName === '/' && req.method === 'POST') {
    const filePath = path.normalize(path.join(__dirname, '../views/index.html'));

    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }

      const htmlData = data;

      let form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) {
          throw err;
        }

        const searchText = fields.search[0];

        fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
          if (err) {
            throw err;
          }

          let allCats = JSON.parse(data);
          allCats = allCats.filter((cat) => cat.name.includes(searchText));

          let modifiedCats;
          if (allCats.length === 0) {
            modifiedCats = '<h2 style="margin: auto">There is no cats with that name</h2>';
          } else {
            modifiedCats = allCats.map(
              (cat) => `<li>
          <img src="${path.join('./content/images/' + cat.image)}"
              alt="${cat.name}">
          <h3>${cat.name}</h3>
          <p><span>Breed: </span>${cat.breed}</p>
          <p><span>Description: </span>${cat.description}</p>
          <ul class="buttons">
              <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
              <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
          </ul>
      </li>`
            );
          }

          const modifiedHTML = htmlData.toString().replace('{{cats}}', modifiedCats);

          res.writeHead(200, {
            'Content-Type': 'text/html',
          });

          res.write(modifiedHTML);
          res.end();
        });
      });
    });
  } else {
    return true;
  }
};
