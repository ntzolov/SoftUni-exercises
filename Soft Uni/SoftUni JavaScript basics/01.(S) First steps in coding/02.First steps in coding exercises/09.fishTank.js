function litersWater(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percentUsed = Number(input[3]);

    let capacityInLiters = l * w * h * 0.001;
    let freeSpace = (capacityInLiters - (capacityInLiters * (percentUsed / 100)));

    console.log(freeSpace);

}

litersWater(["85", "75", "47", "17"])