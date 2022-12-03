function traveling(input) {

    let destination = input[0];
    let neededMoney = Number(input[1]);
    let totalSavedMoney = 0;

    let savedMoney = input[2];
    let i = 3;
    while (savedMoney !== "End" && destination !== "End") {

        totalSavedMoney += Number(savedMoney)

        if (totalSavedMoney >= neededMoney) {
            console.log(`Going to ${destination}!`);
            totalSavedMoney = 0;

            destination = input[i];
            i++;
            neededMoney = Number(input[i]);
            i++;
        }

        savedMoney = input[i];
        i++;

    }
}

traveling([
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
])



