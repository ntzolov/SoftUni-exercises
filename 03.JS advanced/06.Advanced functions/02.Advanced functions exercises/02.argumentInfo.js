function argumentInfo(...input) {
  let countTypes = {};

  input.forEach((el) => {
    const type = typeof el;
    console.log(`${type}: ${el}`);
    if (!countTypes[type]) {
      countTypes[type] = 0;
    }
    countTypes[type] += 1;
  });

  Object.entries(countTypes)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, num]) => {
      console.log(`${type} = ${num}`);
    });
}

argumentInfo({ name: 'bob' }, 3.333, 9.999);
