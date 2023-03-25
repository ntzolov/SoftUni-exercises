function deserializeString(input) {
  let result = []
  for (let line of input) {
    if (line === 'end') {
      break;
    } else {
      let [letter, ...rest] = line.split(':');
      let indexes = rest[0].split('/').map(Number)
      for (let index of indexes) {
        result[index] = letter
      }
    }
  }
  console.log(result.join(''));
}

deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end']
)