function house(input) {

    let n = Number(input[0]);
    let oneStar = "*";
    let twoStars = "**";
    let isOneStar = false;
    let isTwoStars = false;
    let dashes = 0;

    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        if (i === 0) {
            if (n % 2 === 0) {
                dashes = Math.ceil((n - 2) / 2); 
                console.log(`${"-".repeat(dashes)}${twoStars}${"-".repeat(dashes)}`);
                isTwoStars = true;
            } else {
                dashes = Math.ceil((n - 2) / 2); 
                console.log(`${"-".repeat(dashes)}${oneStar}${"-".repeat(dashes)}`);
                isOneStar = true;              
            }
            dashes -= 1;
        } else {
            if (isOneStar) {
                oneStar += "**"
                console.log(`${"-".repeat(dashes)}${oneStar}${"-".repeat(dashes)}`);
                dashes -= 1;
            } else {
                twoStars += "**"
                console.log(`${"-".repeat(dashes)}${twoStars}${"-".repeat(Math.floor(dashes))}`);
                dashes -= 1;
            }
        }
    }

    for (let j = 0; j <= n / 2 - 1; j++) {
        console.log(`|${"*".repeat(n - 2)}|`);
    }

}

house([
    "10",
])