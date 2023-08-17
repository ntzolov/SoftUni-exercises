// TODO: Close DB in the end

const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const dbName = 'movies';
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
  console.log(`Connected to '${dbName}' database!`);
}

async function createMovie(title, length, postImage, ageRestriction) {
  const movie = new Movie({ title, length, postImage, ageRestriction });
  movie.save();
}

async function deleteMoviesByTitle(title) {
  await Movie.deleteMany({ title });
}

async function deleteMovieById(id) {
  await Movie.findByIdAndDelete({ _id: id });
}

async function logAllMovies() {
  const movies = await Movie.find();
  console.log(movies);
}

async function logMoviesByAgeRestriction(age) {
  const movies = await Movie.find({ ageRestriction: { $lte: age } });
  console.log(movies);
}

async function executor() {
  const movie = await Movie.find({ title: 'Gladiator' });
  console.log(movie[0].movieLengthInMinutes());
}

executor();
