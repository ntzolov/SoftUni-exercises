function vacation(people, type, day) {
    let price = null;
    switch (day) {
        case 'Friday':
            switch (type) {
                case 'Students': price = 8.45; break;
                case 'Business': price = 10.90; break;
                case 'Regular': price = 15; break;
            } break;
        case 'Saturday':
            switch (type) {
                case 'Students': price = 9.80; break;
                case 'Business': price = 15.60; break;
                case 'Regular': price = 20; break;
            } break;
        case 'Sunday':
            switch (type) {
                case 'Students': price = 10.46; break;
                case 'Business': price = 16; break;
                case 'Regular': price = 22.50; break;
            } break;
    }
    if (type === 'Students' && people >= 30) {
        price *= 0.85
    }
    if (type === 'Business' && people >= 100) {
        people -= 10;
    }
    if (type === 'Regular' && people >= 10 && people <= 20) {
        price *= 0.95;
    }
    let finalPrice = people * price;
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}

vacation(
    40,
    "Regular",
    "Saturday"
)