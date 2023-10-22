const app = require('express')();
const serverConnect = require('./config/express');
const databaseConnect = require('./config/database');

serverConnect(app);
databaseConnect();

// <> CHANGE databaseName
// <> ORGANIZE html documents and 404.hbs and {{{body}}} in layout :)
// CHANGE (IF LOGIC) IN main.hbs
// <> ADD {{title}} to layout
// ADD OWNER when create the product
// EDIT runValidators !!!

// <> 1. Do models.
// 2. Do homepage and register/login/logout
// 3. Do create page
// 4. Do the rest :)
