const database = require('../config/database');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

class Cube {
  constructor(object) {
    this.id = uniqid();
    this.name = object.name;
    this.description = object.description;
    this.difficultyLevel = object.difficultyLevel;
    this.imageUrl = object.imageUrl;
  }

  save() {
    database.push(this);
    const json = JSON.stringify(database, null, 2);
    fs.writeFileSync(path.resolve(__dirname, '../config/database.json'), json);
  }
}

module.exports = Cube;
