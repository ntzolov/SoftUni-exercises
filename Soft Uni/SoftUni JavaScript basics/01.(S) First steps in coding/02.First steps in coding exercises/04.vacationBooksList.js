function booksReading(input) {
    let sheetsCurrentBook = Number(input[0]);
    let sheetsPerHour = Number(input[1]);
    let numberDaysToRead = Number(input[2]);
    let totalReadHours = sheetsCurrentBook / sheetsPerHour
    let hoursPerDay = totalReadHours / numberDaysToRead
    console.log(hoursPerDay)

}

booksReading(["212 ",
"20 ",
"2 "]
)