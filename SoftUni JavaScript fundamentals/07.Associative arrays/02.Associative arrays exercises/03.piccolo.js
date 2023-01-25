function piccolo(input) {
  let carsInParking = {};

  for (let i = 0; i < input.length; i++) {
    let action = input[i].split(', ')[0];
    let number = input[i].split(', ')[1];

    if (action === 'IN') {
      carsInParking[number] = true;
    } else if (action === 'OUT') {
      carsInParking[number] = false;
    }
  }

  let carsInParkingArray = Object.entries(carsInParking).sort(
    (a, b) => a[0].localeCompare(b[0]) || a-b
  );
  let carsInParkingSorted = Object.fromEntries(carsInParkingArray);

  let isParkingEmpty = true;
  for (let key in carsInParkingSorted) {
    if (carsInParkingSorted[key]) {
      console.log(key);
      isParkingEmpty = false;
    }
  }

  if (isParkingEmpty) {
    console.log(`Parking Lot is Empty`);
  }
}

piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);
