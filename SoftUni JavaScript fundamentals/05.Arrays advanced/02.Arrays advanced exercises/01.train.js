function train(array) {
  let wagonsPeople = array.shift().split(' ').map(Number);
  let wagonMaxCapacity = Number(array.shift());

  for (let j = 0; j < array.length; j++) {
    let command = array[j].split(' ');
    if (command.includes('Add')) {
      wagonsPeople.push(Number(command[1]));
      continue;
    } else {
      for (let i = 0; i < wagonsPeople.length; i++) {
        if (Number(command) <= wagonMaxCapacity - wagonsPeople[i]) {
          wagonsPeople[i] += Number(command);
          break;
        }
      }
    }
  }
  console.log(wagonsPeople.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
