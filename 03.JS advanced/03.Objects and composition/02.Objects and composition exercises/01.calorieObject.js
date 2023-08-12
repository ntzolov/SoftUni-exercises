function calorieObject(arr) {
  let calories = {};

  for (let i = 0; i < arr.length; i += 2) {
    let name = arr[i];
    let num = Number(arr[i + 1]);

    calories[name] = num
  }

  console.log(calories);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
