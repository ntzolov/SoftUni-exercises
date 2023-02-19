function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let countChange = 0;
    let isEnd = false;

    for (let first = k; first <= 8; first++) {
        if (isEnd) {
            break;
        }
        for (let second = 9; second >= l; second--) {
            if(isEnd) {
                break;
            }

            for (let third = m; third <= 8; third++) {
                if (isEnd){
                    break;
                }

                for (let fourth = 9; fourth >= n; fourth--) {
                    if (first % 2 === 0 && second % 2 === 1 && third % 2 === 0 && fourth % 2 === 1) {

                        if (first === third && second === fourth) {
                            console.log("Cannot change the same player.");
                        } else {
                            countChange += 1;
                            console.log("" + first + second + " - " + third + fourth);
                        }

                        if (countChange === 6) {
                            isEnd = true;
                        }
                    }

                    if (isEnd) {
                        break;
                    }
                }
            }
        }
    }
}

substitute([
    "6",
    "7",
    "5",
    "6",
])


