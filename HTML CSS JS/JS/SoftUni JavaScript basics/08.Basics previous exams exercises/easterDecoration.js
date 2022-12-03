function easterDecoration(input) {

    let countCurrArticles = 0;
    let countCurrSum = 0;
    let totalSum = 0;
    let totalArticles = 0;


    let i = 0;
    let countPeopleInStore = Number(input[i]);
    i++;
    let currClientID = 0;

    while (true) {

        if (currClientID === countPeopleInStore) {
            break;
        }

        let nameArticle = input[i];
        i++;

        if (nameArticle === "Finish") {
            currClientID += 1;

            if (countCurrArticles % 2 === 0) {
                console.log(`You purchased ${countCurrArticles} items for ${(countCurrSum * 0.80).toFixed(2)} leva.`);
                totalSum += countCurrSum * 0.80;
            } else {
                console.log(`You purchased ${countCurrArticles} items for ${countCurrSum.toFixed(2)} leva.`);
                totalSum += countCurrSum;
            }
            
            countCurrSum = 0;
            countCurrArticles = 0;
            continue;
        }

        if (nameArticle === "basket") {
            countCurrSum += 1.50;
        } else if (nameArticle === "wreath") {
            countCurrSum += 3.80;
        } else if (nameArticle === "chocolate bunny") {
            countCurrSum += 7.00;
        }

        countCurrArticles += 1;
        totalArticles += 1;

    }

    console.log(`Average bill per client is: ${(totalSum / countPeopleInStore).toFixed(2)} leva.`);
}

easterDecoration([
    "2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish",
])