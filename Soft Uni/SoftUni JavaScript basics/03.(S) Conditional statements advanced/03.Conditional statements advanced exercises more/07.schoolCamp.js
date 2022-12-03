function schoolCamp(input) {

    let season = input[0];
    let typeGroup = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);
    let price = 0;
    let sport = "";

    if (typeGroup === "boys") {
        if (season === "Winter") {
            price += 9.60;
            sport = "Judo";
        } else if (season === "Spring") {
            price += 7.20;
            sport = "Tennis";
        } else if (season === "Summer") {
            price += 15;
            sport = "Football";
        }
    } else if (typeGroup === "girls") {
        if (season === "Winter") {
            price += 9.60;
            sport = "Gymnastics";
        } else if (season === "Spring") {
            price += 7.20;
            sport = "Athletics";
        } else if (season === "Summer") {
            price += 15;
            sport = "Volleyball";
        }
    } else if (typeGroup === "mixed") {
        if (season === "Winter") {
            price += 10;
            sport = "Ski";
        } else if (season === "Spring") {
            price += 9.50;
            sport = "Cycling";
        } else if (season === "Summer") {
            price += 20;
            sport = "Swimming";
        }
    } 

    if (students >= 10 && students < 20) {
        price *= 0.95;
    } else if (students >= 20 && students < 50) {
        price *= 0.85;
    } else if (students >= 50) {
        price *= 0.50;
    }

console.log(`${sport} ${(nights * students * price).toFixed(2)} lv.`);

}

schoolCamp([
    "Spring",
    "girls",
    "20",
    "7",
])