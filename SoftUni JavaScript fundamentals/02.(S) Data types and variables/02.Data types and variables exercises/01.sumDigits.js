function sumDigits(num) {
    let stringFromNum = String(num);
    let sum = 0;
    for (let i = 0; i < stringFromNum.length; i++) {
        let numIndex = Number(stringFromNum[i]);
        sum += numIndex
    }
    console.log(sum);
}

sumDigits(245678)