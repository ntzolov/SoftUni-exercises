function perfectNumber(num) {
  let result = 0;
  for(let i = 1; i < num; i++){
    if (num % i === 0) {
      result += i
    }
  }
  console.log(result === num ? 'We have a perfect number!' : 'It\'s not so perfect.');
}

perfectNumber(1236498)