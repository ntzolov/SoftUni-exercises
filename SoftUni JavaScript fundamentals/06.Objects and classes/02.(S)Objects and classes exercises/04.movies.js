function movies(arrayOfMovies) {
  let info = [];

  for (const line of arrayOfMovies) {
    if (line.includes('addMovie')) {
      let name = line.split('addMovie ')[1];
      info.push({ name });
      console.log(info);
    } else if (line.includes('directedBy')) {
      let [movie, director] = line.split(' directedBy ')
      let object = (info.find(({name}) => name === movie)) // ({search current object specific key})
      if (object) {
        object.director = director
      }
    } else if (line.includes('onDate')) {
      let [movie, date] = line.split(' onDate ');
      let object = (info.find(currObj => currObj.name === movie))  // names current object "currObj" then search the key with "."
      if (object) {
        object.date = date
      }
    }
  }
  for (const movie of info) {
    if (movie.name && movie.date && movie.director) {
      console.log(JSON.stringify(movie));
    }
  }
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);
