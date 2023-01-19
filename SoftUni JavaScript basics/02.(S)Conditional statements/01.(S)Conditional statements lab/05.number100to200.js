function numRange(input) {
    let x = Number(input[0]);

    if (x < 100) {
        console.log('Less than 100');
    } else if (x <= 200) {
        console.log('Between 100 and 200');
    } else if (x > 200) {
        console.log('Greater than 200');
    }
}

numRange(["95"])