(function solve() {
  String.prototype.ensureStart = function (str) {
    let result = '';
    if (!this.startsWith(str)) {
      result = str + ' ' + this;
    } else {
      result = this;
    }
    return result;
  };

  String.prototype.ensureEnd = function (str) {
    let result = '';
    if (!this.endsWith(str)) {
      result = this + ' ' + str;
    } else {
      result = this;
    }
    return result;
  };

  String.prototype.isEmpty = function () {
    return this == '' ? true : false;
  };

  String.prototype.truncate = function (n) {
    if (this.length < n) {
      return this;
    } else if (n < 4) {
      let result = '.';
      return result.repeat(n);
    } else {
      let result = this.split(' ');
      let firstPlusElipsis = result[0] + '...';
      if (n <= firstPlusElipsis.length) {
        return result[0].slice(0, n - 3) + '...';
      } else {
        let array = this.split(' ');
        let testNextWord = [];
        let final = [];
        for (let word of array) {
          testNextWord.push(word);
          if (testNextWord.join(' ').length + 3 <= n) {
            final.push(word);
          } else {
            break;
          }
        }
        return final.join(' ') + '...';
      }
    }
  };
})();

let test = 'smartphone is good';
console.log(test.truncate(16));
