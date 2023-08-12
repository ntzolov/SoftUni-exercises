function attachEventsListeners() {
  const input = document.querySelector('#inputDistance');
  const btnConvert = document.querySelector('#convert');

  btnConvert.addEventListener('click', convert);
  function convert() {
    const calculations = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };

    const inputNumber = Number(input.value);
    const convertFrom = document.querySelector('#inputUnits').value;
    const inputMeters = inputNumber * calculations[convertFrom];

    const convertTo = document.querySelector('#outputUnits').value;
    const output = document.querySelector('#outputDistance');

    output.value = inputMeters / calculations[convertTo];
  }
}
