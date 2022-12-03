function moving(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let countArticles = 0;
    let isDone = false;
    let freeArea = w * l * h;
    let i = 3;

    while(true) {
        
        countArticles = input[i];
        i++;

        if (countArticles === "Done") {
            isDone = true;
            break;
        }

        if (Number(countArticles) > freeArea) {
            break;
        }

        freeArea -= Number(countArticles);

    }

    if (isDone === true) {
        console.log(`${freeArea} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${countArticles - freeArea} Cubic meters more.`);
    }

}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
