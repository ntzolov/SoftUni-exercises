function adAstra(data) {
  let pattern =
    /([#|])(?<name>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9][0-9]{0,3}|10000)\1/g;
  let text = data.shift();
  let matches = text.matchAll(pattern);
  let foodCalories = 0;

  for (let match of matches) {
    let calories = Number(match.groups.calories);
    foodCalories += +calories
  }

  let daysAlive = Math.trunc(foodCalories / 2000)
  console.log(`You have food to last you for: ${daysAlive} days!`);

  matches = text.matchAll(pattern);

  for (let match of matches) {
    let name = match.groups.name;
    let date = match.groups.date;
    let calories = Number(match.groups.calories);

    console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
  }

}

adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);
