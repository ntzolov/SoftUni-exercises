function solve() {
  const btnDepart = document.getElementById('depart');
  const btnArrive = document.getElementById('arrive');
  const infoTable = document.getElementById('info').firstChild;

  let nextStop = 'depot';
  let nextStopName;

  async function depart() {
    try {
      const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`;
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error('Error');
      }

      const data = await response.json();

      nextStopName = data.name;
      nextStop = data.next;

      btnDepart.disabled = true;
      btnArrive.disabled = false;

      infoTable.textContent = `Next stop ${nextStopName}`;
    } catch (error) {
      btnDepart.disabled = false;
      btnArrive.disabled = false;

      infoTable.textContent = 'Error';
    }
  }

  function arrive() {
    btnDepart.disabled = false;
    btnArrive.disabled = true;

    infoTable.textContent = `Arriving at ${nextStopName}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
