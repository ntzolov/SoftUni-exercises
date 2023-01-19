function streamOfLetters(input) {

    function onlyLatinCharacters(str) {
        return /^[a-zA-Z]+$/.test(str);
    }

    let i = 0;
    let command = input[i];
    i++;
    let isFoundC = 0;
    let isFoundO = 0;
    let isFoundN = 0;
    let buff = "";
    let buffTwo = "";

    while (true) {

        if (command === "End") {
            break;
        }

        if (command === "c") {
            if (isFoundC === 0) {
                isFoundC = 1;
                command = input[i];
                i++;
                if (isFoundC === 1 && isFoundO === 1 && isFoundN === 1) {
                    buff += buffTwo + " ";
                    isFoundC = 0;
                    isFoundO = 0;
                    isFoundN = 0;
                    buffTwo = "";
                }
                continue;
            }
        } else if (command === "o") {
            if (isFoundO === 0) {
                isFoundO = 1;
                command = input[i];
                i++;
                if (isFoundC === 1 && isFoundO === 1 && isFoundN === 1) {
                    buff += buffTwo + " ";
                    isFoundC = 0;
                    isFoundO = 0;
                    isFoundN = 0;
                    buffTwo = "";
                }
                continue;
            }
        } else if (command === "n") {
            if (isFoundN === 0) {
                isFoundN = 1;
                command = input[i];
                i++;
                if (isFoundC === 1 && isFoundO === 1 && isFoundN === 1) {
                    buff += buffTwo + " ";
                    isFoundC = 0;
                    isFoundO = 0;
                    isFoundN = 0;
                    buffTwo = "";
                }
                continue;
            }
        }

        

        if (onlyLatinCharacters(command) === true) {
            buffTwo += command;
        }


        command = input[i];
        i++;
    }

    console.log(buff);
}

streamOfLetters([
    "o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End",
])