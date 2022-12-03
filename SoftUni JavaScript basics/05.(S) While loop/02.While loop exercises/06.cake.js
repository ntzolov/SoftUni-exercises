function cake(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);

    let areaOfCake = w * l;
    let isStopped = false;
    let i = 2;
    while(true) {

        let cakeTaken = input[i];
        i++;

        if (cakeTaken === "STOP") {

            console.log(`${diff} pieces are left.`);
            break;
        }

        if (cakeTaken > areaOfCake) {
            diff = Math.abs(Number(cakeTaken) - areaOfCake)
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        }

        diff = Math.abs(Number(cakeTaken) - areaOfCake)
        areaOfCake -= cakeTaken; 

    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
