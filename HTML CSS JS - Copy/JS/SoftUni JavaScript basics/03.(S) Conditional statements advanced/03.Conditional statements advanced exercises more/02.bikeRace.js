function bikeRace(input) {

    let countJuniors = Number(input[0]);
    let countSeniors = Number(input[1]);
    let trackType = input[2];

    let juniorsTax = 0;
    let seniorsTax = 0;

    if (trackType === "trail") {
        juniorsTax = 5.50;
        seniorsTax = 7;
    } else if (trackType === "cross-country") {
        juniorsTax = 8;
        seniorsTax = 9.50;
    } else if (trackType === "downhill") {
        juniorsTax = 12.25;
        seniorsTax = 13.75;
    } else if (trackType === "road") {
        juniorsTax = 20;
        seniorsTax = 21.50;
    } 

    let income = (countJuniors * juniorsTax) + (countSeniors * seniorsTax);

    if (trackType === "cross-country" && countJuniors + countSeniors >= 50) {
        income *= 0.75;
    }

    income *= 0.95;

    console.log(income.toFixed(2));

}

bikeRace([
    "10",
    "20",
    "trail",
])