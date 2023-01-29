function carWash(arr) {
  let percentWashed = 0;
  for (let i = 0; i < arr.length; i++) {
    let currCommand = arr[i];
    switch (currCommand) {
      case 'soap':
        percentWashed += 10;
        break;
      case 'water':
        percentWashed *= 1.2;
        break;
      case 'vacuum cleaner':
        percentWashed *= 1.25;
        break;
      case 'mud':
        percentWashed *= 0.9;
    }
  }
  console.log(`The car is ${percentWashed.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
