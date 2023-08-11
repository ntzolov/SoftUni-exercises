function deleteByEmail() {
  let searchedText = document.querySelector('input[name="email"]').value;
  let list = Array.from(document.querySelectorAll('#customers tbody tr td'));
  let result = document.getElementById('result');

  let isFound = false;
  for (let el of list) {
    if (el.textContent === searchedText) {
      el.parentElement.remove();
      result.textContent = 'Deleted.';
      isFound = true;
    }
  }

  if (!isFound) {
    result.textContent = 'Not found.';
  }
}
