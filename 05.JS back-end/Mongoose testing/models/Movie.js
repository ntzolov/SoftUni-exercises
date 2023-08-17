const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  length: String,
  postImage: String,
  ageRestriction: Number,
});

movieSchema.methods.movieLengthInMinutes = function () {
  let [hours, minutes] = this.length.split(':');
  hours = Number(hours);
  minutes = Number(minutes);
  const minutesFinal = hours * 60 + minutes;
  return `${this.title} is ${minutesFinal} minutes long.`;
};

movieSchema.virtual('info').get(function () {
  return `Movie title: ${this.title}\nLength: ${this.length}\nAge: ${this.ageRestriction}`;
});

module.exports = mongoose.model('Movie', movieSchema);
