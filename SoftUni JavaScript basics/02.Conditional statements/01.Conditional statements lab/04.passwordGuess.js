function isCorrect(input) {
    let guess = input[0];

    if (guess === "s3cr3t!P@ssw0rd") {
        console.log('Welcome');
    } else {
        console.log("Wrong password!")
    }
}

isCorrect(["s3cr3t!P@ssw0rd"])