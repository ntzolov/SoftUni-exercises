function grades(input) {

    let totalScore = 0;
    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let groupFour = 0;
    let i = 0 ;
    let countStudents = Number(input[i]);
    i++;


    for (let j = 0; j < countStudents; j++) {
        let grade = Number(input[i]);
        i++;

        totalScore += grade;

        if (grade >= 2 && grade <= 2.99) {
            groupOne += 1;
        } else if (grade >= 3 && grade <= 3.99) {
            groupTwo += 1;
        } else if (grade >= 4 && grade <= 4.99) {
            groupThree += 1;
        } else if (grade >= 5) {
            groupFour += 1;
        } 

    }

    let allAverage = totalScore /countStudents

    console.log(`Top students: ${(groupFour / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(groupThree / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(groupTwo / countStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(groupOne / countStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${allAverage.toFixed(2)}`);

}

grades([
    "10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5",
])