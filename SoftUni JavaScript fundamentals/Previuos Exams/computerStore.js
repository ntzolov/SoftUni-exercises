function ComputerStore(arr) {
  let sum = 0;
  let taxes = 0;

  let i = 0;

  do {
    if (Number(arr[i] < 0)) {
      console.log('Invalid price!');
      i++;
      continue;
    }
    if (arr[0] === 'regular' || arr[0] === 'special') {
      break;
    }
    sum += Number(arr[i]);
    i++;
  } while (arr[i] !== 'special' && arr[i] !== 'regular');

  taxes = sum * 0.2;

  if (sum === 0 || sum === NaN) {
    console.log('Invalid order!');
  } else if (arr[i] === 'regular') {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${(sum + taxes).toFixed(2)}$`);
  } else if (arr[i] === 'special') {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${((sum + taxes) * 0.9).toFixed(2)}$`);
  }
}

ComputerStore(['special']);
