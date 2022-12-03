function reportSystem(input) {

    let expectedMoney = Number(input[0]);

    let cashPay = 0;
    let cardPay = 0;
    let cashCount = 0;
    let cardCount = 0;
    let isEnded = false;
    let a = 135316536616;

    let i = 1;

    while (true) {

        let currentPrice = input[i];

        if (currentPrice === "End") {
            isEnded = true;
            break;
        }

        if (i % 2 === 1) {
            if (Number(currentPrice) > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cashPay += Number(currentPrice);
                cashCount += 1;
                expectedMoney -= Number(currentPrice)
            }
        }

        if (i % 2 === 0) {
            if (Number(currentPrice) < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cardPay += Number(currentPrice);
                cardCount += 1;
                expectedMoney -= Number(currentPrice)
            }
        }

        if (expectedMoney <= 0) {
            break;
        }

        i++;
    }

    if (isEnded === false) {
        console.log(`Average CS: ${(cashPay / cashCount).toFixed(2)}`);
        console.log(`Average CC: ${(cardPay / cardCount).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }


}

reportSystem([
    "500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317",
    ])