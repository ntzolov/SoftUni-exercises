// 90/100

function arrayManipulator(integers, commands) {
  for (let command of commands) {
    let action = command.split(' ');
    let result = [];

    if (action[0] === 'add') {
      integers.splice(action[1], 0, Number(action[2]));
    } else if (action[0] === 'addMany') {
      let integersToAdd = action.splice(2);
      integersToAdd = integersToAdd.map(Number);
      integers.splice(action[1], 0, ...integersToAdd);
    } else if (action[0] === 'contains') {
      if (integers.includes(Number(action[1]))) {
        console.log(integers.indexOf(Number(action[1])));
      } else {
        console.log(-1);
      }
    } else if (action[0] === 'remove') {
      integers.splice(Number(action[1]), 1);
    } else if (action[0] === 'shift') {
      for (let i = 0; i < Number(action[1]); i++) {
        let temp = integers.shift();
        integers.push(temp);
      }
    } else if (action[0] === 'sumPairs') {
      let sum = 0;
      let counter = 0;
      for (let i = 0; i < integers.length; i++) {
        counter++;
        sum += integers[i];
        if (i > 0 && counter === 2) {
          result.push(sum);
          counter = 0;
          sum = 0;
        }
      }
      if (sum !== 0) {
        result.push(sum);
      }
      integers = result.slice();
    } else if (action[0] === 'print') {
      console.log(`[ ${integers.join(', ')} ]`);
    }
  }
}

arrayManipulator([2, 2, 4, 2, 4], ['add 1 4', 'sumPairs', 'print']);
