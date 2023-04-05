function blackFlag(input) {
  let [days, plunderDaily, expectedPlunder] = input.map(Number);
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += plunderDaily;

    if (i % 3 === 0) {
      totalPlunder += plunderDaily / 2;
    }

    if (i % 5 === 0) {
      totalPlunder -= totalPlunder * 0.3;
    }
    
  }

  let percentOfExpectedPlunder = (totalPlunder / expectedPlunder) * 100;

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(
      `Collected only ${percentOfExpectedPlunder.toFixed(2)}% of the plunder.`
    );
  }
}

blackFlag(['10', '20', '380']);
