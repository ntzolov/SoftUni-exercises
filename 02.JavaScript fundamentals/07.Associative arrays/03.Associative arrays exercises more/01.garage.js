function garage(input) {
  let garage = {};

  for (let line of input) {
    let [garageNumber, ...rest] = line.split(' - ');
    for (let line of rest) {
      const tokens = line.split(', ');
      let currCar = {};
      for (let token of tokens) {
        const [property, value] = token.split(': ');
        currCar[property] = value;
      }

      if (!garage[garageNumber]) {
        garage[garageNumber] = [];
      }
      garage[garageNumber].push(currCar);
    }
  }

  for (let key in garage) {
    console.log(`Garage № ${key}`);
    for (let car in garage[key]) {
      let result = [];
      for (let prop in garage[key][car]) {
        result.push(`${prop} - ${garage[key][car][prop]}`);
      }
      console.log(`--- ${result.join(', ')}`);
    }
  }
}

garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);
