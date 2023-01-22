function buildAWall(array) {
  let concreteTotal = 0;
  let concreteForADay = 0;
  let concreteList = [];
  let isDone = false;

  while (!isDone) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 30) {
        concreteForADay += 195;
        array[i]++;
      }
    }
    concreteList.push(concreteForADay);
    concreteTotal += concreteForADay;
    concreteForADay = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 30) {
        isDone = false;
        break;
      } else {
        isDone = true;
      }
    }
  }

  console.log(concreteList.join(', '));
  console.log(`${concreteTotal * 1900} pesos`);
}

buildAWall([21, 25, 28]);
