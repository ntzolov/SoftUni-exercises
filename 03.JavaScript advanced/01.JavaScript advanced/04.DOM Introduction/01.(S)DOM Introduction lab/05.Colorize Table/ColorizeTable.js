function colorize() {
  let table = document.querySelectorAll('tr');
  for (let i = 1; i < table.length; i++) {
    if (i % 2 !== 0) {
        table[i].style.backgroundColor = 'Teal'
    }
  }
}
