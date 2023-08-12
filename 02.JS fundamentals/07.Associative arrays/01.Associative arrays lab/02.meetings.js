function meetings(input) {
  let schedule = {};
  for (const line of input) {
    let [day, name] = line.split(' ');

    if (schedule[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      schedule[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const key in schedule) {
    console.log(`${key} -> ${schedule[key]}`);
  }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
