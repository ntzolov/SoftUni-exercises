function garage(input) {
  let garage = {};

  for (let line of input) {
    line = line.split(/ - |, /gm);
    let garageNumber = Number(line.shift());
    if (!garage[garageNumber]) {
      garage[garageNumber] = [];
    }
    let carProperties = [];
    for (let el of line) {
      let [key, value] = el.split(': ');
      carProperties.push([key, value]);
    }
    garage[garageNumber].push(carProperties);
  }

  for (let garageNumber in garage) {
    console.log(`Garage № ${garageNumber}:`);
    garage[garageNumber].forEach((slot, index) => {
      let log = [...slot]
      console.log(log);
      slot.forEach((car) => console.log(car));
    });
  }
}

garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);
