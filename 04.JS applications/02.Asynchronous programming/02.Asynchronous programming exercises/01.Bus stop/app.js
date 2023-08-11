async function getInfo() {
  const busId = document.getElementById('stopId').value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
  const stopName = document.getElementById('stopName');
  const buses = document.getElementById('buses');
  stopName.innerText = '';
  buses.innerText = ''
  const availableStops = [1287, 1308, 1327, 2334]

  try {
    if (!availableStops.includes(+busId)) {
        throw new Error('Error')
    }

    const response = await fetch(url);
    const obj = await response.json();

    stopName.innerText = obj.name;

    Object.entries(obj.buses).forEach((el) => {
      let data = `Bus ${el[0]} arrives in ${el[1]} minutes`;
      buses.appendChild(createLi(data));
    });

    function createLi(data) {
      let li = document.createElement('li');
      li.innerText = data;
      return li;
    }
  } catch (err) {
    stopName.innerText = 'Error'
  }
}
