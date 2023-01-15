function sortAnArrayBy2Criteria(array) {
  function twoCriteriaSort(a, b) {
    return a.length - b.length || a.localeCompare(b);
  }

  console.log(array.sort(twoCriteriaSort).join('\n'));
}

sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
