function solution(string) {
  return function add(str) {
    return string + str;
  };
}

let add7 = solution('Elon ');
console.log(add7('Musk'));

