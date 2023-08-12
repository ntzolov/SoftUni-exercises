function addAndRemove(arr) {
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter++;
    if (arr[i] === 'add') {
      newArr.push(counter);
    } else if (arr[i] === 'remove') {
      newArr.splice((newArr.length - 1), 1);
    }
  }
  if (!newArr.length) {
    console.log('Empty');
  } else {
    console.log(newArr.join(' '));
  }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add', 'add', 'remove', 'remove']);
