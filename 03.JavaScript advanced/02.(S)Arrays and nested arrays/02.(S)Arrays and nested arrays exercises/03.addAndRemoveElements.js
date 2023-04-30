function addAndRemoveElements(arr) {
  let number = 0;
  let result = [];
  for (let command of arr) {
    switch (command) {
      case 'add':
        number++;
        result.push(number);
        break;
      case 'remove':
        number++
        result.pop()
    }
  }
  return result.length > 0 ?  result.join('\n') : 'Empty' 
}

console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
