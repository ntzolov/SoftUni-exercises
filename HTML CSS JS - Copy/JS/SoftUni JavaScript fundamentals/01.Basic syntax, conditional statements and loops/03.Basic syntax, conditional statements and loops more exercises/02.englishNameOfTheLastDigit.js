function englishNameOfTheLastDigit(num) {
    let result = '';
    let digit = String(num);
    digit = digit.slice(-1);
    digit = Number(digit);
    switch (digit) {
        case 0: result = 'zero'; break;
        case 1: result = 'one'; break;
        case 2: result = 'two'; break;
        case 3: result = 'three'; break;
        case 4: result = 'four'; break;
        case 5: result = 'five'; break;
        case 6: result = 'six'; break;
        case 7: result = 'seven'; break;
        case 8: result = 'eight'; break;
        case 9: result = 'nine'; break;
    }
    console.log(result);
}

englishNameOfTheLastDigit(3777)