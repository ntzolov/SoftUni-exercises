function addItem() {
  let list = document.getElementById('items');
  let textInput = document.getElementById('newItemText');
  let li = document.createElement('li');

  li.textContent = textInput.value;

  let deleteBtn = document.createElement('a');
  deleteBtn.href = '#';
  deleteBtn.textContent = '[Delete]';
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(deleteBtn);
  list.appendChild(li);

  textInput.value = '';
}
