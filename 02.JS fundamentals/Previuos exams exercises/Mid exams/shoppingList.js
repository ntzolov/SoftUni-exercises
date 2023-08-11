function shoppingList(input) {
  let myList = input.shift().split('!');
  let line = input.shift();

  while (line !== 'Go Shopping!') {
    line = line.split(' ')
    let [action, item, newItem] = line
    if (action === 'Urgent') {
      add(item)
    } else if (action === 'Unnecessary') {
      remove(item)
    } else if (action === 'Correct') {
      correct(item, newItem)
    } else if (action === 'Rearrange') {
      reArrange(item)
    }
    line = input.shift();
  }

  function add(item) {
    if (!myList.includes(item)) {
      myList.unshift(item)
    }
  }
  function remove(item) {
    if (myList.includes(item)) {
      let index = myList.indexOf(item);
      myList.splice(index, 1)
    }
  }
  function correct(item, newItem) {
    if (myList.includes(item)) {
      let index = myList.indexOf(item);
      myList.splice(index, 1, newItem)
    }
  }
  function reArrange(item) {
    if (myList.includes(item)) {
      let index = myList.indexOf(item);
      let itemCut = myList.splice(index, 1).join('')
      myList.push(itemCut)
    }
  }

  console.log(myList.join(', '));
}

shoppingList([
  'Tomatoes!Potatoes!Bread',
  'Unnecessary Milk',
  'Urgent Tomatoes',
  'Rearrange Tomatoes',
  'Go Shopping!',
]);
