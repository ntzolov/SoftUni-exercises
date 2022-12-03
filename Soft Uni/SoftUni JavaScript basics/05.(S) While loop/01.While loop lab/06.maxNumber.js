function maxNumber(input) {

    let index = 0;
    let max = Number.MIN_SAFE_INTEGER

    while(index < input.length) {

        if (String(input[index]) === "Stop") {
            break;
        }

        let currNumber = Number(input[index])

        if(currNumber > max) {
            max = currNumber
        }
        
        index++
    }

    console.log(max);

}

maxNumber([
    "-100",
    "-1",
    "-80",
    "-70",
    "Stop",
])
