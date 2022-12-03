function histogram(input) {

    let range = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= range; i++) {

        let currNum = Number(input[i]);

        if (currNum < 200) {
            p1 += 1;
        } else if (currNum <= 399) {
            p2 += 1;
        } else if (currNum >= 400 && currNum <= 599) {
            p3 += 1;
        } else if (currNum >= 600 && currNum <= 799) {
            p4 += 1;
        } else if (currNum >= 800) {
            p5 += 1;
        }

    }

    let counter = p1 + p2 + p3 + p4 + p5;

    console.log(`${(p1 / counter * 100).toFixed(2)}%`);
    console.log(`${(p2 / counter * 100).toFixed(2)}%`);
    console.log(`${(p3 / counter * 100).toFixed(2)}%`);
    console.log(`${(p4 / counter * 100).toFixed(2)}%`);
    console.log(`${(p5 / counter * 100).toFixed(2)}%`);

}

    histogram(["3", "1", "2", "999"])