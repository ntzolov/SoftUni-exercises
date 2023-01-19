function title(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (gender === "m" && age < 16) {
        console.log("Master");
    } else if (gender === "m" && age >= 16) {
        console.log("Mr.");
    } else if (gender === "f" && age < 16) {
        console.log("Miss");
    } else if (gender === "f" && age >= 16) {
        console.log("Ms.");
    }

}

title(["12", "f"])