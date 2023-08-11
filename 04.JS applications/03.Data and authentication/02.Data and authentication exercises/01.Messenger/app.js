attachEvents();

function attachEvents() {
  document.getElementById('submit').addEventListener('click', submitMessage);
  document.getElementById('refresh').addEventListener('click', showMessages);
}

async function submitMessage() {
  let author = document.querySelectorAll('#controls input')[0];
  let content = document.querySelectorAll('#controls input')[1];

  const dataUpload = { author: author.value, content: content.value };

  const url = 'http://localhost:3030/jsonstore/messenger';
  const options = {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(dataUpload),
  };

  const response = await fetch(url, options);
  const data = await response.json();

  author.value = '';
  content.value = '';
}

async function showMessages() {
  const url = 'http://localhost:3030/jsonstore/messenger';

  const response = await fetch(url);
  const data = await response.json();

  const result = [];

  Object.values(data).forEach((obj) => {
    result.push(`${obj.author}: ${obj.content}`);
  });

  document.getElementById('messages').value = result.join('\n');
}
