function theatrePromotion(day, age) {
    let price = 0;
    isError = false;
    if (age <= 18 && age >= 0) {
        if (day === 'Weekday') {
            price = 12;
        } else if (day === 'Weekend') {
            price = 15;
        } else if (day === 'Holiday') {
            price = 5;
        }
    } else if (age <= 64 && age > 0) {
        if (day === 'Weekday') {
            price = 18;
        } else if (day === 'Weekend') {
            price = 20;
        } else if (day === 'Holiday') {
            price = 12;
        }
    } else if (age <= 122 && age > 0) {
        if (day === 'Weekday') {
            price = 12;
        } else if (day === 'Weekend') {
            price = 15;
        } else if (day === 'Holiday') {
            price = 10;
        }
    } else {
        console.log('Error!');
        isError = true;
    }
    if (!isError) {
        console.log(price + '$');
    }
}

theatrePromotion('Holiday', 0)