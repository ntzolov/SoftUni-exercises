function lowerOrUpper(letter) {
  let asciiNumFromLetter = letter.charCodeAt();
  if (asciiNumFromLetter >= 65 && asciiNumFromLetter <= 90) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}

lowerOrUpper("L");
