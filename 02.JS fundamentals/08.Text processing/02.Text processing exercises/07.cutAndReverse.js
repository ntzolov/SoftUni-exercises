function cutAndReverse(string) {
  let firstHalf = string.slice(0, string.length / 2);
  let secondHalf = string.slice(string.length / 2)
  firstHalf = firstHalf.split('').reverse().join('')
  secondHalf = secondHalf.split('').reverse().join('')
  console.log(firstHalf);
  console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')