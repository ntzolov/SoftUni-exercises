function createSortedList() {
  let collection = [];
  let list = {
    add(element) {
      collection.push(element);
      collection.sort((a, b) => a - b);
      this.size++;
    },
    remove(index) {
      if (index >= 0 && index < collection.length) {
        collection.splice(index, 1);
        this.size--;
      } else {
        console.log('Invalid index');;
      }
    },
    get(index) {
      if (index >= 0 && index < collection.length) {
        return collection[index];
      } else {
        console.log('Invalid index');
      }
    },
    size: 0,
  };

  return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
