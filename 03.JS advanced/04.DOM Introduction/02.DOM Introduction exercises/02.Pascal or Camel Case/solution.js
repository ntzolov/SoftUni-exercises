function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let textAsArray = text.split(' ');
  let res = []
  if (convention === 'Camel Case') {
    for (let i = 0; i < textAsArray.length; i++) {
      if (i !== 0) {
        let temp = ''
        for (let j = 0; j < textAsArray[i].length; j++) {
          if (j !== 0) {
            temp += textAsArray[i][j].toLowerCase()
          } else {
            temp += textAsArray[i][j].toUpperCase()
          }
        }
        res.push(temp)
      } else {
        res.push(textAsArray[i].toLowerCase())
      }
    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < textAsArray.length; i++) {
        let temp = ''
        for (let j = 0; j < textAsArray[i].length; j++) {
          if (j !== 0) {
            temp += textAsArray[i][j].toLowerCase()
          } else {
            temp += textAsArray[i][j].toUpperCase()
          }
        }
        res.push(temp)
    }
  } else {
    res.push('Error!')
  }

  result.textContent = res.join('')
}