const express = require('express');
const serverConnect = require('./config/express');
const databaseConnect = require('./config/database');
const app = express();

serverConnect(app);
databaseConnect();

// CHANGE databaseName
// ORGANIZE html documents
// CHANGE (IF LOGIC) IN main.hbs
// ADD {{title}} to layout
// ADD OWNER when create the product
// EDIT runValidators !!!

// 1. Do models.
// 2. Do homepage and register/login/logout
// 3. Do create page
// 4. Do the rest :)
