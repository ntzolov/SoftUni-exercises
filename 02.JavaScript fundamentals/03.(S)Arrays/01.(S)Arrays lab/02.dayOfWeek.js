function dayOfWeek(dayAsNumber) {
  let daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (dayAsNumber < 1 || dayAsNumber > 7) {
    console.log("Invalid day!");
  } else {
    console.log(daysOfWeek[dayAsNumber - 1]);
  }
}

dayOfWeek(0);
