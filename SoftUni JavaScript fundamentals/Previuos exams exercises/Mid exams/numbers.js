function numbers(numbers) {
  let numbersArray = numbers.split(' ').map(Number);
  let sum = 0;

  for(let num of numbersArray) {
    sum += num
  }
  let averageSum = sum / numbersArray.length;

  let result = []
  for (let num of numbersArray) {
    if (num > averageSum) {
      result.push(num)
    }
  }

  result.sort((a,b) => b-a)

  if (result.length > 0) {
    console.log(result.slice(0, 5).join(' '));
  } else {
    console.log('No');
  }
}

numbers('-6 -5 -4 -3 -2 -1 2')