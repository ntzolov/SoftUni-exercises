function favouriteMovie(input) {

    let movieToWatch = "";
    let maxPoints = 0;
    let limit = false;

    let i = 0;
    for (let j = 1; j <= 8; j++) {

        let points = 0;

        let nameMovie = input[i];
        i++;

        if (j > 7) {
            limit = true;
            break;
        }

        if (nameMovie === "STOP") {
            break;
        }

        for (let k = 0; k < nameMovie.length; k++) {

            points += nameMovie.charCodeAt(k)

            if (nameMovie.charAt(k) === " ") {
            } else if (nameMovie.charAt(k) === 0 || nameMovie.charAt(k) < 0 || nameMovie.charAt(k) > 0) {
            } else if (nameMovie.charAt(k) === nameMovie.charAt(k).toUpperCase()) {
                points -= nameMovie.length
            } else if (nameMovie.charAt(k) === nameMovie.charAt(k).toLowerCase()) {
                points -= (2 * nameMovie.length)
            }
        }

        if (points > maxPoints) {
            movieToWatch = nameMovie
            maxPoints = points;
        }
    }

    if (limit) {
        console.log(`The limit is reached.`)
        console.log(`The best movie for you is ${movieToWatch} with ${maxPoints} ASCII sum.`)
    } else {
        console.log(`The best movie for you is ${movieToWatch} with ${maxPoints} ASCII sum.`)
    }

}

favouriteMovie([
    "Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards",
])