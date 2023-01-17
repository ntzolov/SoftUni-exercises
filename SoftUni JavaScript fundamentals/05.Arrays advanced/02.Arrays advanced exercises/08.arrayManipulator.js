// 90/100

function arrayManipulator(integers, commands) {
  for (let command of commands) {
    let action = command.split(' ');
    let result = [];
    let output = [];

    if (action[0] === 'add') {
      integers.splice(+action[1], 0, +action[2]);

    } else if (action[0] === 'addMany') {
      let integersToAdd = action.slice(2);
      integersToAdd = integersToAdd.map(Number);
      integers.splice(+action[1], 0, ...integersToAdd);

    } else if (action[0] === 'contains') {
      let element = +action[1];
      let index = integers.indexOf(element);
      console.log(index);

    } else if (action[0] === 'remove') {
      integers.splice(+action[1], 1);
    } else if (action[0] === 'shift') {

      let rotations = +action[1];
      for (let j = 0; j < rotations; j++) {
        let element = integers.shift();
        integers.push(element);
      }
    } else if (action[0] === 'sumPairs') {    
      if (integers.length % 2 === 0) {
        for (let k = 0; k < integers.length; k += 2) {
          output.push(integers[k] + integers[k + 1]);
        }
      } else {
        for (let k = 0; k < integers.length - 1; k += 2) {
          output.push(integers[k] + integers[k + 1]);
        }
        output.push(integers.pop());
      }
      integers = output;
      output = [];
      
    } else if (action[0] === 'print') {
      console.log('[ ' + integers.join(', ') + ' ]');
    }
  }
}

arrayManipulator([1, 2, 2, 2], ['sumPairs 5', 'print']);
