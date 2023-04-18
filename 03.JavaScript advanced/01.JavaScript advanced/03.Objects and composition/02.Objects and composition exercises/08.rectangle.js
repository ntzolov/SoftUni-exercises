function rectangle(width, height, color) {
  let colorToArr = color.split('');
  let firstLetter = colorToArr.shift();
  colorToArr.unshift(firstLetter.toUpperCase());
  let editedColor = colorToArr.join('');

  let rect = {
    width,
    height,
    color: editedColor,
    calcArea() {
      return this.width * this.height;
    },
  };

  return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
