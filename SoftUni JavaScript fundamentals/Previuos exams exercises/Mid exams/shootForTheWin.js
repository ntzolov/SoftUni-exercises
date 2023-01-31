function shootForTheWin(input) {
  let targets = input.shift().split(' ').map(Number);
  let shotedIndexes = []

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'End') {
      console.log(`Shot targets: ${shotedIndexes.length} -> ${targets.join(' ')}`);
    }
  if (Number(input[i]) <= targets.length - 1) {
    let magigNum = Number(targets[Number(input[i])])
    targets[Number(input[i])] = -1
    shotedIndexes.push(Number(input[i]))
    for (let j = 0; j < targets.length; j++) {
      if (shotedIndexes.includes(j)) {
        continue
      }
      if (targets[j] > magigNum) {
        targets[j] -= magigNum
      } else {
        targets[j] += magigNum
      }
    }
  }
  }
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
