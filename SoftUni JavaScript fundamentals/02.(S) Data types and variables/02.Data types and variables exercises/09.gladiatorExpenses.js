function gladiatorExpenses(
  lost,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let moneyPaid = 0;
  let shieldBrokenCounter = 0;
  for (let i = 1; i <= lost; i++) {
    if (i % 2 === 0) {
      moneyPaid += helmetPrice;
    }
    if (i % 3 === 0) {
      moneyPaid += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      moneyPaid += shieldPrice;
      shieldBrokenCounter += 1;
    }
    if (shieldBrokenCounter === 2) {
      moneyPaid += armorPrice;
      shieldBrokenCounter = 0;
    }
  }
  console.log(`Gladiator expenses: ${moneyPaid.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
