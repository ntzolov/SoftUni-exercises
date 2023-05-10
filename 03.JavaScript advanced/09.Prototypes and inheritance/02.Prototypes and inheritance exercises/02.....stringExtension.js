(function solve() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str.concat(this);
    }
    return this;
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this.concat(str);
    }
    return this;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0 ? true : false;
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

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      string = string.replace(`{${i}}`, params[i]);
    }
    return string;
  };
})();

let str = 'quick brown fox jumps over the lazy dog';
console.log((str = str.ensureStart('The ')));
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
console.log(String.format('The {0} {1} fox', 'quick', 'brown'));
str = String.format('jumps {0} {1}', 'dog');
