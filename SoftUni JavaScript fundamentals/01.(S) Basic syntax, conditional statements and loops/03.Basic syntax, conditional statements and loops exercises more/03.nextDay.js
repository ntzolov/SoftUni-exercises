function nextDay(year, month, day) {
    let date = new Date(year, (month - 1), (day + 1))
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}

nextDay(1988, 8, 6)

