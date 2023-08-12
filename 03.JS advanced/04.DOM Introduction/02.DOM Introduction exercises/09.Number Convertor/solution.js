function solve() {
  const selectMenuTo = document.querySelector('#selectMenuTo');
  const hex = document.createElement('option');
  hex.value = 'hexadecimal';
  hex.textContent = 'Hexadecimal';
  const bin = document.createElement('option');
  bin.value = 'binary';
  bin.textContent = 'Binary';
  selectMenuTo.appendChild(hex);
  selectMenuTo.appendChild(bin);

  const inputNumber = document.querySelector('#input');
  const btnConvert = document.querySelector('button');
  btnConvert.addEventListener('click', convert);
  function convert() {
    if (selectMenuTo.value === 'hexadecimal') {
      document.querySelector('#result').value = Number(inputNumber.value).toString(16).toUpperCase();
    } else if (selectMenuTo.value === 'binary') {
      document.querySelector('#result').value = Number(inputNumber.value).toString(2).toUpperCase();
    }
  }
}
