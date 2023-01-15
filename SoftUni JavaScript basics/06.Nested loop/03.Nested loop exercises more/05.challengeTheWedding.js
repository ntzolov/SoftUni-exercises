function challengeTheWedding(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let maxTables = Number(input[2]);
    let result = "";
    let counter = 0;

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            if (counter === maxTables) {
                break;
            }
            result += "" + `(${i} <-> ${j}) `;
            counter += 1;
        }
    }

    console.log(result);

}

challengeTheWedding([
    "2",
    "2",
    "3",
])