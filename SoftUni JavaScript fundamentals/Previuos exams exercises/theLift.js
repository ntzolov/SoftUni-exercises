function TheLift(arr) {
  let queue = Number(arr[0]);
  let cabins = arr[1].split(' ');
  for (let i = 0; i < cabins.length; i++) {
    while (Number(cabins[i]) < 4 && queue > 0) {
      cabins[i] = parseInt(cabins[i]);
      cabins[i] += 1;
      queue -= 1;
    }
  }
  if (queue > 0) {
    console.log(`There isn't enough space! ${queue} people in a queue!
${cabins.join(' ')}`);
  } else if (queue === 0 && cabins[cabins.length - 1] === 4) {
    console.log(`${cabins.join(' ')}`);
  } else {
    console.log(`The lift has empty spots!
${cabins.join(' ')}`);
  }
}

TheLift(['8', '0 0']);
