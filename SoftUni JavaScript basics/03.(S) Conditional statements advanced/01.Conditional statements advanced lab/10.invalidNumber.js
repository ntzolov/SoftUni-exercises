function isValid(input) {

    let number = Number(input[0]);

    if (number >= 100 && number <= 200) {
    } else if (number === 0) {
    } else console.log("invalid");

}

isValid(["75"])