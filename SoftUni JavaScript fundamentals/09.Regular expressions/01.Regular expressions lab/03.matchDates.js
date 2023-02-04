function matchDates(data) {
  let pattern =
    /\b(?<day>\d{2})(?<separator>[-./])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/g;

  let validate = pattern.exec(data);

  while (validate !== null) {
    let day = validate.groups['day'];
    let month = validate.groups['month'];
    let year = validate.groups['year'];
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    validate = pattern.exec(data);
  }
}

matchDates([
  '13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016',
]);
