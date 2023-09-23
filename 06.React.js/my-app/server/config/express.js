require('dotenv').config()
const express = require('express');
const cors = require('cors');

module.exports = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ extended: true }));
  app.use(cors());
};
