function guineaPig(data) {
  let [quantityFood, quantityHay, quantityCover, pigWeight] = data.map(Number);
  
  for (let i = 1; i <= 30; i++) {
    quantityFood -= 0.3;

    if (i % 2 === 0) {
      quantityHay -= quantityFood * 0.05
    }

    if (i % 3 === 0) {
      quantityCover -= pigWeight / 3
    }

    if (quantityFood < 0 || quantityHay < 0 || quantityCover < 0) {
      console.log('Merry must go to the pet store!');
      return
    }
  }

  console.log(`Everything is fine! Puppy is happy! Food: ${quantityFood.toFixed(2)}, Hay: ${quantityHay.toFixed(2)}, Cover: ${quantityCover.toFixed(2)}.`);
}

guineaPig(['10', '5', '5.2', '1']);
