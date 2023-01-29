function movingTarget(data) {
  let targets = data.shift().split(' ');
  let line = data.shift().split(' ');

  while (line[0] !== 'End') {
    let command = line[0];
    let index = +line[1];
    let value = +line[2];

    if (command == 'Shoot') {
      if (index >= 0 && index < targets.length) {
        targets[index] -= value;
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      }
    } else if (command === 'Add') {
      if (index >= 0 && index < targets.length) {
        targets.splice(index, 0, value)
      } else {
        console.log('Invalid placement!');
      }
    } else if (command === 'Strike') {
      if (index - value >= 0 && index + value <= targets.length) {
        targets.splice(index - value, value * 2 + 1)
      } else {
        console.log('Strike missed!');
      }
    }

    line = data.shift().split(' ');
  }
  
  console.log(targets.join('|'));
}

movingTarget([
  '52 74 23 44 96 110',
  'Shoot 5 10',
  'Shoot 1 80',
  'Strike 2 1',
  'Add 22 3',
  'End',
]);
