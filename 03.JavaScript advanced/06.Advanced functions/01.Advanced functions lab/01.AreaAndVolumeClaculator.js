function solve(areaFunc, volFunc, shapes) {
  return JSON.parse(shapes).map((shape) => {
    let area = areaFunc.call(shape);
    let volume = volFunc.call(shape);
    return { area, volume };
  });
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

const input = `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`;

solve(area, vol, input);
