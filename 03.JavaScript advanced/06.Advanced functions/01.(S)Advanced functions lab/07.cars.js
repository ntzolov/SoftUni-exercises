function solve(input) {
  function create(name, inherit) {
    let obj = {};
    obj.name = name;

    if (inherit) {
      const inheritFrom = arr.find((el) => el.name === inherit);
      obj = Object.create(inheritFrom, {
        name: {
          value: name,
          enumerable: true,
          writable: true,
          configurable: true,
        },
      });
    }

    return obj;
  }

  const arr = [];

  for (const line of input) {
    if (line.includes('create')) {
      if (line.includes('inherit')) {
        let [name, inherit] = line
          .split(/create | inherit /g)
          .filter((el) => el.length > 0);
        arr.push(create(name, inherit));
      } else {
        let [name] = line.split('create ').filter((el) => el.length > 0);
        arr.push(create(name));
      }
    } else if (line.includes('set')) {
      const [name, key, value] = line
        .split(/set | /g)
        .filter((el) => el.length > 0);
      const objToEdit = arr.find((el) => el.name === name);
      objToEdit[key] = value;
    } else if (line.includes('print')) {
      const [name] = line.split('print ').filter((el) => el.length > 0);
      const objToPrint = arr.find((el) => el.name === name);
      const toPrint = [];
      for (const key in objToPrint) {
        if (key !== 'name') {
          toPrint.push(`${key}:${objToPrint[key]}`);
        }
      }
      console.log(toPrint.join(','));
    }
  }
}

solve([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);


