function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = undefined
    let type = undefined
    let expenses = 0

    if (budget <= 100) {
        if (season === "summer") {
            destination = "Bulgaria"
            type = "Camp"
            expenses = budget * 0.3
        } else if (season === "winter") {
            destination = "Bulgaria"
            type = "Hotel"
            expenses = budget * 0.7
        } 

    } else if (budget <= 1000) {
        if (season === "summer") {
            destination = "Balkans"
            type = "Camp"
            expenses = budget * 0.4
        } else if (season === "winter") {
            destination = "Balkans"
            type = "Hotel"
            expenses = budget * 0.8
        } 

    } else if (budget > 1000) {
        if (season === "summer") {
            destination = "Europe"
            type = "Hotel"
            expenses = budget * 0.9
        } else if (season === "winter") {
            destination = "Europe"
            type = "Hotel"
            expenses = budget * 0.9
        } 
    } 

    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${expenses.toFixed(2)}`);

}

journey(["50", "summer"])