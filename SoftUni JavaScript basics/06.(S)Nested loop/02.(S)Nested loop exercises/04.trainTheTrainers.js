function trainTheTrainers(input) {

    let i = 0;
    let countJury = Number(input[i]);
    i++;
    let countPresentations = 0;
    let totalSum = 0;

    while (true) {
        let namePresentation = input[i];
        i++;
    
        if (namePresentation === "Finish") {
            break;
        }

        let currSum = 0;
        countPresentations += 1;

        for (let j = 0; j < countJury; j++) {
            let grade = Number(input[i]);
            i++;
            currSum += grade;
        }

        let averageForCurr = currSum / countJury;
        console.log(`${namePresentation} - ${averageForCurr.toFixed(2)}.`);
        totalSum += currSum;
    }

    let totalAverage = totalSum / (countPresentations * countJury);
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);

}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish",
])
