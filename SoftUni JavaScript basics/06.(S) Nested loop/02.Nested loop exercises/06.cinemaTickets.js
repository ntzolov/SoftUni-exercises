function cinemaTickets(input) {

    let i = 0;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (true) {
        let nameMovie = input[i];
        i++;

        let currTotal = 0;

        if (nameMovie === "Finish") {
            break;
        }
        let seatsAvailable = Number(input[i]);
        i++;

        for (let j = 1; j <= seatsAvailable; j++) {
            let typeTicket = input[i];
            i++;

            if (typeTicket === "End") {
                break;
            } else if (typeTicket === "student") {
                studentTickets += 1;
                currTotal += 1;

            } else if (typeTicket === "standard") {
                standardTickets += 1;
                currTotal += 1;

            } else if (typeTicket === "kid") {
                kidTickets += 1;
                currTotal += 1;

            }

            totalTickets += 1;

        }

        console.log(`${nameMovie} - ${(currTotal / seatsAvailable * 100).toFixed(2)}% full.`);
        currTotal = 0;
    }

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`)

}

cinemaTickets([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish",
])
