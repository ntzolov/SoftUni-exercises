function vacation(input) {

    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;
    let spendOrSave = input[index];
    index++;

    let days = 0;
    let toFive = 0;


    while (moneyNeeded > moneyAvailable) {
        days += 1;
        if (spendOrSave === "spend") {
            let quantity = Number(input[index]);
            index++;
            moneyAvailable -= quantity
            toFive +=1;
        } 
        
        if (spendOrSave === "save") {
            let quantity = Number(input[index]);
            index++;
            moneyAvailable += quantity
            toFive = 0;
        }

        if (moneyAvailable < 0) {
            moneyAvailable = 0;
        }

        if (toFive === 5) {
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }
        
        spendOrSave = input[index];
        index++;
    }
    
    if (moneyAvailable >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }
    

}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

