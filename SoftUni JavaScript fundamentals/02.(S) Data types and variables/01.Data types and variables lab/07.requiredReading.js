function requiredReading(pages, pagesReadInOneHour, daysMustRead) {
    let totalHoursRead = pages / pagesReadInOneHour;
    let hoursReadPerDay = totalHoursRead / daysMustRead;
    console.log(hoursReadPerDay);
}

requiredReading(
    212,
    20,
    2,
)