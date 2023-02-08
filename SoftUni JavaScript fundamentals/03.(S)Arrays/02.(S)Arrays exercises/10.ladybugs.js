function ladybugs(arr) {
  let fieldsArray = [];
  let bugsInitial = arr[1].split(' ');

  for (let i = 0; i < arr[0]; i++) {
    fieldsArray.push(0);
    for (let j = 0; j < bugsInitial.length; j++) {
      if (i === Number(bugsInitial[j])) {
        fieldsArray[i] = 1;
      }
    }
  }

  for (let i = 2; i < arr.length; i++) {
    let currMove = arr[i];
    let start = Number(currMove.split(' ')[0]);
    let direction = String(arr[i].split(' ')[1]);
    let step = Number(currMove.split(' ')[2]);

    if (
      fieldsArray[start] === 0 ||
      start > fieldsArray.length - 1 ||
      start < 0
    ) {
      continue;
    }

    fieldsArray[start] = 0;

    if (direction === 'right') {
      start += step;

      while (start <= fieldsArray.length - 1 && fieldsArray[start] === 1) {
        start += step;
      }
      if (start <= fieldsArray.length - 1) {
        fieldsArray[start] = 1;
      }
    } else {
      start -= step;

      while (start >= 0 && fieldsArray[start] === 1) {
        start -= step;
      }
      if (start >= 0) {
        fieldsArray[start] = 1;
      }
    }
  }
  console.log(fieldsArray.join(' '));
}

ladybugs([10, '0 4 8 9 14', '1 left 1']);
