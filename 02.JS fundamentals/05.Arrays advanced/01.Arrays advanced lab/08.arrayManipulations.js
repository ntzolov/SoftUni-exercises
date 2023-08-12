function arrayManipulations(arr) {
  let arrToManipulate = arr.shift().split(' ').map(x => +x);

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(' ');

    if (command[0] === 'Add') {
      add(Number(command[1]));
    } else if (command[0] === 'Remove') {
      remove(Number(command[1]));
    } else if (command[0] === 'RemoveAt') {
      removeAt(Number(command[1]));
    } else if (command[0] === 'Insert') {
      insert(Number(command[1]), Number(command[2]));
    }
  }

  function add(number) {
    arrToManipulate.push(number);
  }

  function remove(number) {
    for (let i = 0; i < arrToManipulate.length; i++) {
      if (arrToManipulate[i] === number) {
        arrToManipulate.splice(i, 1);
      }
    }
  }

  function removeAt(index) {
    arrToManipulate.splice(index, 1);
  }

  function insert(number, index) {
    arrToManipulate.splice(index, 0, number);
  }

  console.log(arrToManipulate.join(' '));
}

arrayManipulations([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3',
]);
