function evenPowers(input) {

    let num = Number(input[0]);
    let two = 2
    let pow = 2


    for (let i = 0; i <= num; i++) {
        
        if (i === 0) {
            console.log(Math.pow(2, 0));
        } else if (i % 2 === 0) {
            let twoPoweredToN = Math.pow(two, i)
            console.log(twoPoweredToN);
        }   
    }
}

evenPowers(["7"])