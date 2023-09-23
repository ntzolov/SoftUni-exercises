const express = require('express');
const serverConnect = require('./config/express');
const routes = require('./config/routes');

const app = express();


serverConnect(app);
routes(app);

app.listen(3030, () => console.log('Server is listening on port 3030...'));
