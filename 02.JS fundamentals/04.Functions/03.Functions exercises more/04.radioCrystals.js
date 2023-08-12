function radioCrystals(arr) {
  let desiredThickness = arr[0];
  let currThickness = 0;

  for (let index = 1; index < arr.length; index++) {
    currThickness = arr[index];
    console.log(`Processing chunk ${currThickness} microns`);

    if (currThickness === desiredThickness) {
      console.log(`Finished crystal ${desiredThickness} microns`);
      continue;
    }
    currThickness = cut(arr[index]);
    if (currThickness === desiredThickness) {
      console.log(`Finished crystal ${desiredThickness} microns`);
      continue;
    }
    currThickness = lap(arr[index]);
    if (currThickness === desiredThickness) {
      console.log(`Finished crystal ${desiredThickness} microns`);
      continue;
    }
    currThickness = grind(arr[index]);
    if (currThickness === desiredThickness) {
      console.log(`Finished crystal ${desiredThickness} microns`);
      continue;
    }
    currThickness = etch(arr[index]);
    if (currThickness === desiredThickness) {
      console.log(`Finished crystal ${desiredThickness} microns`);
      continue;
    }
    currThickness = xRay(arr[index]);
    if (currThickness === desiredThickness) {
      console.log(`Finished crystal ${desiredThickness} microns`);
      continue;
    }
  }

  function cut(number) {
    let counter = 0;
    while (
      currThickness / 4 >= desiredThickness - 1 &&
      desiredThickness - 1 !== 0
    ) {
      currThickness /= 4;
      counter++;
    }
    currThickness = Math.floor(currThickness);
    if (counter != 0) {
      console.log(`Cut x${counter}`);
      console.log('Transporting and washing');
    }
    return currThickness;
  }

  function lap(number) {
    let counter = 0;
    while (
      currThickness * 0.8 >= desiredThickness - 1 &&
      currThickness * 0.8 < currThickness - 20 &&
      currThickness * 0.8 < currThickness - 2
    ) {
      if (currThickness > 1 && currThickness < 2) {
        break;
      }
      currThickness *= 0.8;
      counter++;
    }
    currThickness = Math.floor(currThickness);
    if (counter != 0) {
      console.log(`Lap x${counter}`);
      console.log('Transporting and washing');
    }
    return currThickness;
  }

  function grind(number) {
    let counter = 0;
    while (currThickness - 20 >= desiredThickness - 1) {
      currThickness -= 20;
      counter++;
    }
    currThickness = Math.floor(currThickness);
    if (counter != 0) {
      console.log(`Grind x${counter}`);
      console.log('Transporting and washing');
    }
    return currThickness;
  }

  function etch(number) {
    let counter = 0;
    while (currThickness > desiredThickness) {
      currThickness -= 2;
      counter++;
    }
    currThickness = Math.floor(currThickness);
    if (counter != 0) {
      console.log(`Etch x${counter}`);
      console.log('Transporting and washing');
    }
    return currThickness;
  }

  function xRay(number) {
    let counter = 0;
    if (currThickness + 1 === desiredThickness) {
      currThickness += 1;
      counter++;
    }
    currThickness = Math.floor(currThickness);
    if (counter != 0) {
      console.log(`X-ray x${counter}`);
    }
    return currThickness;
  }
}

radioCrystals([1, 4]);
