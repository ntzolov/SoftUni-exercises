function animalType(input) {
    
    let whatType = input[0];

    if (whatType === "dog") {
        console.log("mammal");
    } else if (whatType === "crocodile" || whatType === "tortoise" || whatType === "snake") {
        console.log("reptile");
    } else {
        console.log("unknown");
    }
}

animalType(["dog"])