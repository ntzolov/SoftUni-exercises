function minNumber(input) {

    let index = 0;
    let min = 64386364864384368

    while(index < input.length) {

        if (String(input[index]) === "Stop") {
            break;
        }

        let currNumber = Number(input[index])

        if(currNumber < min) {
            min = currNumber
        }
        
        index++
    }

    console.log(min);

}

minNumber([
    "100",
    "99",
    "80",
    "70",
    "Stop",
])
