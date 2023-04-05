function matchTickets(input) {

    let budget = Number(input[0]);
    let ticketType = input[1];
    let people = Number(input[2]);
    let priceTickets = 0;

    if (people > 0 && people <= 4) {
        budget *= 0.25;
    } else if (people <= 9) {
        budget *= 0.40;
    } else if (people <= 24) {
        budget *= 0.50;
    } else if (people <= 49) {
        budget *= 0.60;
    } else if (people >= 50) {
        budget *= 0.75;
    } 

    if (ticketType === "VIP") {
        priceTickets = people * 499.99;
    } else if (ticketType === "Normal") {
        priceTickets = people * 249.99;
    }

    let diff = Math.abs(priceTickets - budget);

    if (budget >= priceTickets) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

matchTickets([
    "1000",
    "Normal",
    "1",
])