function excursionSale(input) {

    let i = 0;
    let numTravelsSea = Number(input[i]);
    i++;
    let numTravelsMountain = Number(input[i]);
    i++;
    let countSea = 0;
    let soldSea = 0;
    let countMountain = 0;
    let soldMountain = 0;
    let isSold = false;


    while (true) {
        let currSale = input[i];
        i++;

        if (currSale === "Stop") {
            break;
        }

        if (currSale === "sea") {
            if (numTravelsSea === 0){
                continue;
            }
            countSea += 1;
            numTravelsSea -= 1;
        } else if (currSale === "mountain") {
            if (numTravelsMountain === 0) {
                continue;
            }
            countMountain += 1;
            numTravelsMountain -= 1;
        }

        if (numTravelsMountain === 0 && numTravelsSea === 0) {
            isSold = true;
            break;
        }


    }

    let profit = (countSea * 680) + (countMountain * 499);

    if (isSold) {
        console.log("Good job! Everything is sold.");
    }

    console.log(`Profit: ${profit} leva.`);

}

excursionSale([
    "2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain",
])
