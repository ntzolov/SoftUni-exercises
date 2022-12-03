function hotelPrice(input) {

    let month = input[0];
    let night = Number(input[1]);

    priceStudio = 0;
    priceApartment = 0;

    if (month === "May" || month === "October") {
        priceStudio = 50;
        priceApartment = 65;
       
        if (night > 7 && night <= 14) {
            priceStudio *= 0.95
        } else if (night > 14) {
            priceStudio *= 0.70
        }
    } else if (month === "June" || month === "September") {
        priceStudio = 75.20;
        priceApartment = 68.70;

        if (night > 14) {
            priceStudio *= 0.80
        }
    } else if (month === "July" || month === "August") {
        priceStudio = 76;
        priceApartment = 77;
    }  

    if (night > 14) {
        priceApartment *= 0.90
    }

        console.log(`Apartment: ${(priceApartment * night).toFixed(2)} lv.`);
        console.log(`Studio: ${(priceStudio * night).toFixed(2)} lv.`);

}

hotelPrice(["May",
"15"])

