function hospital(input) {

    let i = 0;
    let days = Number(input[i]);
    i++;
    let doctors = 7;
    let treated = 0;
    let notTreated = 0;

    for (let j = 1; j <= days; j++) {

        let numberPatients = Number(input[i]);
        i++;

        if (j % 3 === 0) {
            if (notTreated > treated) {
                doctors += 1;
            }
        }

        if (numberPatients <= doctors) {
            treated += numberPatients;
        } else {
            treated += doctors;
            notTreated += numberPatients - doctors;
        }

    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${notTreated}.`);

}

hospital([
    "4",
    "7",
    "27",
    "9",
    "1",
])