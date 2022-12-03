function bills(input) {

    let numMonths = Number(input[0]);
    let i = 1;

    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;

    for (let j = 1; j <= numMonths; j++) {
        let priceElectricity = Number(input[i]);
        i++;
        electricity += priceElectricity;
        water += 20;
        internet += 15;
        other += (priceElectricity + 20 + 15) * 1.20;
    }

    let average = (electricity + water + internet + other) / numMonths;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}

bills([
    "5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22",
])