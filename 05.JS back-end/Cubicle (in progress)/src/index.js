const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const middleware = (req, res, next) => {
  console.log(`Request URL: ${req.url}; Request method: ${req.method}`);

  next();
};

app.use(middleware);

app.route('/')

app.listen(5000, () => console.log('Server listening on port 5000...'));
