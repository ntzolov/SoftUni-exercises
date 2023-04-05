function gcd(a, b) {
  for (let i = Math.max(a, b); i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return console.log(i);
    }
  }
}

gcd(15, 5)