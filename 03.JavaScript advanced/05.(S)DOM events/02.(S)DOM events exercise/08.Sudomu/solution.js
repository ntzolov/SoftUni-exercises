function solve() {
  const table = document.getElementsByTagName('table')[0];
  const btnCheck = document.getElementsByTagName('button')[0];
  const btnClear = document.getElementsByTagName('button')[1];
  const result = document.querySelector('#check p');
  let numbers = document.getElementsByTagName('input');

  btnCheck.addEventListener('click', check);
  function check() {
    let matrix = [
      [
        Number(numbers[0].value),
        Number(numbers[1].value),
        Number(numbers[2].value),
      ],
      [
        Number(numbers[3].value),
        Number(numbers[4].value),
        Number(numbers[5].value),
      ],
      [
        Number(numbers[6].value),
        Number(numbers[7].value),
        Number(numbers[8].value),
      ],
    ];

    let isSolved = true;
    for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      let col = matrix.map((row) => row[i]);

      if (
        row.length !== [...new Set(row)].length ||
        col.length !== [...new Set(col)].length
      ) {
        isSolved = false;
        break;
      }
    }

    if (!isSolved) {
      fail();
    } else {
      success();
    }
  }

  btnClear.addEventListener('click', clearAll);
  function clearAll() {
    table.style.border = 'none';
    result.textContent = '';

    Array.from(numbers).forEach((num) => {
      num.value = '';
    });
  }

  function fail() {
    table.style.border = '2px solid red';
    result.style.color = 'red';
    result.textContent = 'NOP! You are not done yet...';
  }

  function success() {
    table.style.border = '2px solid green';
    result.style.color = 'green';
    result.textContent = 'You solve it! Congratulations!';
  }
}
