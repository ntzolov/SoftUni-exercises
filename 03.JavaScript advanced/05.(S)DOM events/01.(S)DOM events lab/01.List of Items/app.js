function addItem() {
  console.log('test');
  let list = document.getElementById('items');
  let textInput = document.getElementById('newItemText');
  let li = document.createElement('li');
  li.textContent = textInput.value;
  list.appendChild(li);
  textInput.value = '';
}
