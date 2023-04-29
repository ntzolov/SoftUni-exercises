function add(a) {
  let sum = 0;
  function add1(b) {
    sum += b;

    return add1;
  }
  add1.toString = () => {
    return sum;
  };
  return add1(a);
}

console.log(add(1)(6)(-3).toString());
