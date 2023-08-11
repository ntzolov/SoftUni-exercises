const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const pathName = req.url;

  if (pathName === '/' && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/index.html'));

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain',
        });

        res.write('Not found!');
        res.end();
      }

      const htmlData = data;

      fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }

        let cats = JSON.parse(data);
        console.log(cats);
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
  } else {
    return true;
  }
};
