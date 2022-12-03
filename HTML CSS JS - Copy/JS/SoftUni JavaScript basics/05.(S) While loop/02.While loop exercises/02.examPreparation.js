function examPreparation(input) {

    let index = 0;
    let marksToFail = Number(input[index]);
    index++;
    let nameTask = input[index];
    index++;
    let score = Number(input[index]);
    index++

    let allScore = 0;
    let countTasks = 0;
    let lastTask = "";
    let failed = 0;

     while (nameTask !== "Enough" && failed < marksToFail) {

        if (score <= 4){
            failed += 1;
        }

        allScore += score;
        countTasks += 1;
        lastTask = nameTask;

        nameTask = input[index];
        index++;
        score = Number(input[index]);
        index++

     }

     if (failed < marksToFail) {
        console.log(`Average score: ${(allScore / countTasks).toFixed(2)}`);
        console.log(`Number of problems: ${countTasks}`);
        console.log(`Last problem: ${lastTask}`);
     } else {
        console.log(`You need a break, ${failed} poor grades.`);
     }

}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
