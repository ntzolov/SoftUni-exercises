const express = require('express');
const serverConnect = require('./config/express');
const databaseConnect = require('./config/database');
const app = express();

serverConnect(app);
databaseConnect();

// CHANGE databaseName
// ORGANIZE html documents
// CHANGE (IF LOGIC) IN main.hbs

// 1. Do models.
// 2. Do homepage and register/login/logout
// 3. Do create page
