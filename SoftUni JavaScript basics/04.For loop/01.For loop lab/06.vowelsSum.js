function func(input) {

    let text = input[0];

    score = 0;

    for (let i = 0; i < text.length; i++) {

        if (text[i] === "a") {
            score += 1;
        } else if (text[i] === "e") {
            score += 2;
        } else if (text[i] === "i") {
            score += 3;
        } else if (text[i] === "o") {
            score += 4;
        } else if (text[i] === "u") {
            score += 5;
        }

    }

        console.log(score);

}

func(["hello"])