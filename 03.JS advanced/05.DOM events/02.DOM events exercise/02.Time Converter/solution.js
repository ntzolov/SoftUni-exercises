function attachEventsListeners() {
  const daysInput = document.querySelector('#days');
  const daysBtn = document.querySelector('#daysBtn');
  const hoursInput = document.querySelector('#hours');
  const hoursBtn = document.querySelector('#hoursBtn');
  const minutesInput = document.querySelector('#minutes');
  const minutesBtn = document.querySelector('#minutesBtn');
  const secondsInput = document.querySelector('#seconds');
  const secondsBtn = document.querySelector('#secondsBtn');

  daysBtn.addEventListener('click', () => {
    const days = Number(daysInput.value);
    hoursInput.value = days * 24;
    minutesInput.value = days * 24 * 60;
    secondsInput.value = days * 24 * 60 * 60;
  });

  hoursBtn.addEventListener('click', () => {
    const hours = Number(hoursInput.value);
    daysInput.value = hours / 24;
    minutesInput.value = hours * 60;
    secondsInput.value = hours * 60 * 60;
  });

  minutesBtn.addEventListener('click', () => {
    const minutes = Number(minutesInput.value);
    daysInput.value = minutes / 60 / 24;
    hoursInput.value = minutes / 60;
    secondsInput.value = minutes * 60;
  });

  secondsBtn.addEventListener('click', () => {
    const seconds = Number(secondsInput.value);
    daysInput.value = seconds / 60 / 60 / 24;
    hoursInput.value = seconds / 60 / 60;
    minutesInput.value = seconds / 60;
  });
}
