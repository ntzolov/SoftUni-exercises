function oldBooks(input) {

    let index = 0;
    let favoriteBook = input[index];
    index++;
    let guessTheBook = input[index];
    index++;
    
    let countGuesses = 0;

    while (guessTheBook !== "No More Books" && guessTheBook !== favoriteBook) {
        countGuesses += 1;
        guessTheBook = input[index];
        index++; 
    }

    if (guessTheBook === favoriteBook) {
        console.log(`You checked ${countGuesses} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${countGuesses} books.`);
    }

}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])
