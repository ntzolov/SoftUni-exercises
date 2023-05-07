(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    let result = this.slice(n);
    return result;
  };

  Array.prototype.take = function (n) {
    let result = this.slice(0, n);
    return result;
  };

  Array.prototype.sum = function () {
    let sum = this.reduce((sum, el) => sum + el, 0);
    return sum;
  };

  Array.prototype.average = function () {
    let sum = this.reduce((sum, el) => sum + el, 0);
    let average = sum / this.length;
    return average;
  };
})();

let myArr = [1, 2, 3, 4, 5];
console.log(myArr.average());
