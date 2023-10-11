const express = require('express');
const serverConnect = require('./config/express');
const databaseConnect = require('./config/database');
const app = express();

serverConnect(app);
databaseConnect();

// CHANGE databaseName
// CHANGE (IF LOGIC) IN main.hbs
