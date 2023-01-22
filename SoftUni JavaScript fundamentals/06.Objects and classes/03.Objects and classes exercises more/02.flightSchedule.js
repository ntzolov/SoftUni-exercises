function flightSchedule(array) {
  let allFLights = array.shift();
  let allFLightsSorted = [];

  for (let line of allFLights) {
    allFLightsSorted.push(line.split(/ (.*)/s));
  }

  let changeStatusFlights = array.shift();
  let changeStatusFlightsSorted = [];

  for (let line of changeStatusFlights) {
    changeStatusFlightsSorted.push(line.split(/ (.*)/s));
  }

  let command = array.shift();
  let listFlights = [];

  class Flight {
    constructor(code, destination, status) {
      this.code = code;
      this.destination = destination;
      this.status = status;
    }
  }

  for (let i = 0; i < allFLightsSorted.length; i++) {
    let flight = new Flight(
      allFLightsSorted[i][0],
      allFLightsSorted[i][1],
      'Ready to fly'
    );
    listFlights.push(flight);
  }
  
  for (let i = 0; i < changeStatusFlightsSorted.length; i++) {
    let code = changeStatusFlightsSorted[i][0];
    let currFlight = listFlights.find((el) => el.code === code);
    if (currFlight) {
      currFlight.status = 'Cancelled';
    }
  }

  if (command[0] === 'Ready to fly') {
    listFlights.forEach((obj) => {
      if (obj.status === 'Ready to fly') {
        console.log(
          `{ Destination: '${obj.destination}', Status: '${obj.status}' }`
        );
      }
    });
  } else if (command[0] === 'Cancelled') {
    listFlights.forEach((obj) => {
      if (obj.status === 'Cancelled') {
        console.log(
          `{ Destination: '${obj.destination}', Status: '${obj.status}' }`
        );
      }
    });
  }
}

flightSchedule([
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania',
  ],
  [
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled',
  ],
  ['Ready to fly'],
]);
