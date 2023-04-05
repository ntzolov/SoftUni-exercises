function squareOfStars(int) {
  let star = '* '
  for (let i = 0; i < int; i++) {
    console.log(star.repeat(int));
  }
}

squareOfStars(5)