function nums(input) {

    let a = Number(input[0]) + 1;
    let b = 1

    for (; b < a; b += 3) {
        console.log(b);
    }

} 

nums(["10"])