function suitcasesLoad(input) {

    let i = 0;
    let capacityOfTrunk = Number(input[i]);
    i++;

    let isMoreSpace = true;
    
    let countLoads = 0;
    let command = input[i];
    i++;

    while (command != "End") {

        countLoads += 1;

        if (capacityOfTrunk < 0) {
            isMoreSpace = false;
            countLoads -= 2;
            break;
        }

        if (countLoads % 3 === 0) {
            capacityOfTrunk -= (Number(command) * 1.10);
        } else {
            capacityOfTrunk -= Number(command);
        }
        
        command = input[i];
        i++;

    }

    if (isMoreSpace) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }

    console.log(`Statistic: ${countLoads} suitcases loaded.`);
}

suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])
