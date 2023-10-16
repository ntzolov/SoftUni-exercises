const express = require('express');
const serverConnect = require('./config/express');
const databaseConnect = require('./config/database');
const app = express();

serverConnect(app);
databaseConnect();


// CHANGE databaseName >>>
// ORGANIZE html documents >>>
// CHANGE (IF LOGIC) IN main.hbs

// 1. Do main.hbs and home.hbs >>>
// 2. Do models. >>>
// 3. Do homepage and register/login/logout >>>
// 4. Do create page
// 5. Do the rest :)
