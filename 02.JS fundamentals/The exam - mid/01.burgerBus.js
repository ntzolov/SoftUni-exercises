function burgerBus(input) {
  input.shift();
  let totalProfit = 0;

  let daysCounter = 0;
  for (let i = 0; i < input.length; i += 3) {
    daysCounter++;
    let cityName = input[i];
    let earnings = Number(input[i + 1]);
    let expenses = Number(input[i + 2]);

    if (daysCounter % 5 === 0) {
      earnings -= earnings * 0.1;
    } else if (daysCounter % 3 === 0) {
      expenses += expenses / 2;
    }

    let currProfit = earnings - expenses;
    totalProfit += currProfit;

    console.log(
      `In ${cityName} Burger Bus earned ${currProfit.toFixed(2)} leva.`
    );
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus([
  '5',
  'Lille',
  '2226.00',
  '1200.60',
  'Rennes',
  '6320.60',
  '5460.20',
  'Reims',
  '600.20',
  '452.32',
  'Bordeaux',
  '6925.30',
  '2650.40',
  'Montpellier',
  '680.50',
  '290.20',
]);
