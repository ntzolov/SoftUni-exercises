function pipesInPool(input) {

    let volumePool = Number(input[0]);
    let debitFirstPipe = Number(input[1]);
    let debitSecondPipe = Number(input[2]);
    let hoursLeft = Number(input[3]);

    let litersInPool = (hoursLeft * debitFirstPipe) + (hoursLeft * debitSecondPipe);
    
    if (litersInPool <= volumePool) {
        console.log(`The pool is ${(litersInPool / volumePool * 100).toFixed(2)}% full. Pipe 1: ${((hoursLeft * debitFirstPipe) / litersInPool * 100).toFixed(2)}%. Pipe 2: ${((hoursLeft * debitSecondPipe) / litersInPool * 100).toFixed(2)}%.`);
    } else {
        console.log(`For ${hoursLeft.toFixed(2)} hours the pool overflows with ${Math.abs(volumePool - litersInPool)} liters.`);
    }

}

pipesInPool([
    "1000",
    "100",
    "120",
    "3",
])