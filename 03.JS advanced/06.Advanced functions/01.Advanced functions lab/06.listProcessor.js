function listProcessor(input) {
  let result = [];

  const commands = {
    add(string) {
      result.push(string);
    },
    remove(string) {
      result = result.filter((element) => element !== string);
    },
    print() {
      console.log(result.join(','));
    },
  };

  input.forEach((line) => {
    const [command, string] = line.split(' ');
    commands[command](string);
  });
}

listProcessor([
  'add pesho',
  'add george',
  'add peter',
  'remove peter',
  'print',
]);
