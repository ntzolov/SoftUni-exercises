function trekkingMania(input) {

    countGroups = Number(input[0]);

    let mussala = 0;
    let moblan = 0;
    let kilimandjaro = 0;
    let kTwo = 0;
    let everest = 0;

    let people = 0;

    for (let i = 0; i < countGroups; i++) {
        let countGroup = Number(input[i + 1]);
        people += countGroup;

        if (countGroup <= 5) {
            mussala += countGroup
        } else if (countGroup <= 12) {
            moblan += countGroup;
        } else if (countGroup <= 25) {
            kilimandjaro += countGroup;
        } else if (countGroup <= 40) {
            kTwo += countGroup;
        } else if (countGroup > 40) {
            everest += countGroup;
        } 
    }

    console.log((mussala / people * 100).toFixed(2) + "%");
    console.log((moblan / people * 100).toFixed(2) + "%");
    console.log((kilimandjaro / people * 100).toFixed(2) + "%");
    console.log((kTwo / people * 100).toFixed(2) + "%");
    console.log((everest / people * 100).toFixed(2) + "%");

}

trekkingMania([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78",
])
