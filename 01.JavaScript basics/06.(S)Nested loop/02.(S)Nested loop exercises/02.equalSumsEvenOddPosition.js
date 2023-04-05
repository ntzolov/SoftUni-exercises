function equalSumsEvenOddPosition(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);

    let printLine = "";

    for (let i = x; i <= y; i++) {

        let currentNum = "" + i;
 
        let even = 0;
        let odd = 0;

        for (let j = 0; j <= currentNum.length; j++) {
            let currDigit = Number(currentNum.charAt(j));

            if (j % 2 === 0) {
                even += currDigit;
            } else {
                odd += currDigit;
            }
        }

        if (even === odd){
            printLine += `${i} `;
        }
    }
    console.log(printLine);
    
}

equalSumsEvenOddPosition(["100000",
"100050"])
