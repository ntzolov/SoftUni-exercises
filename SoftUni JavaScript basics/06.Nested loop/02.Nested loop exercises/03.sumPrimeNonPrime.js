function sumPrimeNonPrime(input) {

    let sumOfPrimes = 0;
    let sumOfNonPrimes = 0;
    let isNotPrime = false;

    let i = 0;
    while (true) {

        let command = input[i];
        i++;

        if (Number(command) < 0) {
            console.log("Number is negative.");
            continue;
        }

        if (command === "stop") {
            break;
        }

        for (let j = 2; j <= Number(command) - 1; j++) {
            if (Number(command) % j === 0) {
                sumOfNonPrimes += Number(command);
                isNotPrime = true;
                break;
            } 
        }

        if (!isNotPrime) {
            sumOfPrimes += Number(command);
        }

        isNotPrime = false;
    }

    console.log(`Sum of all prime numbers is: ${sumOfPrimes}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimes}`);

}

sumPrimeNonPrime([
    "3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop",
]) 