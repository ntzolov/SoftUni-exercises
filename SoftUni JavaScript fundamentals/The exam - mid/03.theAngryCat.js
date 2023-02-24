function theAngryCat(priceRatings, entryPoint, type) {
  let entryPointIndex = Number(entryPoint);
  let entryPointValue = priceRatings[entryPointIndex];

  let sumLeft = 0;
  let sumRight = 0;

  if (type === 'cheap') {
    for (let i = entryPoint + 1; i < priceRatings.length; i++) {
      if (priceRatings[i] < entryPointValue) {
        sumRight += priceRatings[i];
      }
    }
    for (let i = entryPoint - 1; i >= 0; i--) {
      if (priceRatings[i] < entryPointValue) {
        sumLeft += priceRatings[i];
      }
    }
  } else if (type === 'expensive') {
    for (let i = entryPoint + 1; i < priceRatings.length; i++) {
      if (priceRatings[i] >= entryPointValue) {
        sumRight += priceRatings[i];
      }
    }
    for (let i = entryPoint - 1; i >= 0; i--) {
      if (priceRatings[i] >= entryPointValue) {
        sumLeft += priceRatings[i];
      }
    }
  }
  if (sumLeft >= sumRight) {
    console.log(`Left - ${sumLeft}`);
  } else {
    console.log(`Right - ${sumRight}`);
  }
}

theAngryCat([1, 5, 1], 1, 'cheap');
