function printDna(number) {
  let dnaStructure = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
  let index = 0;

  let counterPosition = 0;

  for (let i = 0; i < number; i++) {
    counterPosition++;
    if (counterPosition === 5) {
      counterPosition = 1;
    }
    if (counterPosition === 1) {
      if (index > 9) {
        index = 0;
      }
      console.log(`**${dnaStructure[index]}${dnaStructure[index + 1]}**`);
      index += 2;
    } else if (counterPosition === 2) {
      if (index > 9) {
        index = 0;
      }
      console.log(`*${dnaStructure[index]}--${dnaStructure[index + 1]}*`);
      index += 2;
    } else if (counterPosition === 3) {
      if (index > 9) {
        index = 0;
      }
      console.log(`${dnaStructure[index]}----${dnaStructure[index + 1]}`);
      index += 2;
    } else if (counterPosition === 4) {
      if (index > 9) {
        index = 0;
      }
      console.log(`*${dnaStructure[index]}--${dnaStructure[index + 1]}*`);
      index += 2;
    }
  }
}

printDna(10);

// ATCGTTAGGG

// **AT**
// *C--G*
// T----T
// *A--G*

// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*
