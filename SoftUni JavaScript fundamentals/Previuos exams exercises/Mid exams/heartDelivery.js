function heartDelivery(input) {
  let houses = input.shift().split('@').map(Number);
  let line = input.shift();
  let currIndex = 0;

  while (line !== 'Love!') {
    line = line.split(' ');
    let index = Number(line[1]);
    currIndex += index;

    if (currIndex <= houses.length - 1) {
      if (houses[currIndex] > 0) {
        houses[currIndex] -= 2;
        if (houses[currIndex] === 0) {
          console.log(`Place ${currIndex} has Valentine's day.`);
        }
      } else {
        console.log(`Place ${currIndex} already had Valentine's day.`);
      }
    } else {
      currIndex = 0;
      if (houses[currIndex] > 0) {
        houses[currIndex] -= 2;
        if (houses[currIndex] === 0) {
          console.log(`Place ${currIndex} has Valentine's day.`);
        }
      } else {
        console.log(`Place ${currIndex} already had Valentine's day.`);
      }
    }
    line = input.shift();
  }

  console.log(`Cupid's last position was ${currIndex}.`);

  let failed = 0
  for (let house of houses) {
    if (house > 0) {
      failed++
    }
  }

  if (failed > 0) {
    console.log(`Cupid has failed ${failed} places.`);
  } else {
    console.log('Mission was successful.');
  }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
