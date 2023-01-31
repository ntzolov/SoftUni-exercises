function passwordGenerator(data) {
  let firstStr = data.shift();
  let secondStr = data.shift();
  let thirdStr = data.shift().toUpperCase().split('');
  let vowels = ['a', 'e', 'o', 'u', 'i']
  let result = firstStr.concat(secondStr)

  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i])) {
      let temp = thirdStr.shift()
      result = result.replace(result.charAt([i]), temp)
      thirdStr.push(temp)
    }
  }

  console.log(`Your generated password is ${result.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
