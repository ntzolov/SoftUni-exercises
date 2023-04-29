function daysInMonth(month, year) {
  let date = new Date(year, month, 0);
  console.log(date.getDate());
}

daysInMonth(2, 2021);
