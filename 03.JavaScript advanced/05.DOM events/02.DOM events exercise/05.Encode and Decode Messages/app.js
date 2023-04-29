function encodeAndDecodeMessages() {
  const divTextToSend = document.querySelector('#main div:nth-child(1)');
  const divTextRecieved = document.querySelector('#main div:nth-child(2)');

  const textSend = divTextToSend.querySelector('textarea');
  const btnSend = divTextToSend.querySelector('button');
  const textReceive = divTextRecieved.querySelector('textarea');
  const btnReceive = divTextRecieved.querySelector('button');

  btnSend.addEventListener('click', () => {
    let text = textSend.value;

    let textEncodedArray = text
      .split('')
      .map((el) => el.charCodeAt() + 1)
      .map((el) => String.fromCharCode(el));

    textReceive.value = textEncodedArray.join('');
    textSend.value = '';
  });

  btnReceive.addEventListener('click', () => {
    let text = textReceive.value;

    let textDecodedArray = text
      .split('')
      .map((el) => el.charCodeAt() - 1)
      .map((el) => String.fromCharCode(el));

    textReceive.value = textDecodedArray.join('');
  });
}
