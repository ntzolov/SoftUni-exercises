function primeNumberChecker(num) {
    isPrime = true;
    for (let i = 2; i < num - 1; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
}

primeNumberChecker(7)