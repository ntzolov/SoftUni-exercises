function summerOutfit(input) {

    let degree = Number(input[0]);
    let weather = input[1];

    let outfit = undefined
    let shoes = undefined

    if (weather == "Morning") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        } else if (degree > 18 && degree <= 24) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degree >= 25) {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } 

    } else if (weather == "Afternoon") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degree > 18 && degree <= 24) {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (degree >= 25) {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        } 
    } else if (weather == "Evening") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degree > 18 && degree <= 24) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degree >= 25) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } 
    }


    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);

}

summerOutfit(["16", "Morning"])