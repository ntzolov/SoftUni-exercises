function roadRadar(speed, area) {
  let restrictions = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  if (speed <= restrictions[area]) {
    console.log(`Driving ${speed} km/h in a ${restrictions[area]} zone`);
  } else {
    if (speed <= restrictions[area] + 20) {
      console.log(
        `The speed is ${Math.abs(
          speed - restrictions[area]
        )} km/h faster than the allowed speed of ${
          restrictions[area]
        } - ${'speeding'}`
      );
    } else if (speed <= restrictions[area] + 40) {
      console.log(
        `The speed is ${Math.abs(
          speed - restrictions[area]
        )} km/h faster than the allowed speed of ${
          restrictions[area]
        } - ${'excessive speeding'}`
      );
    } else {
      console.log(
        `The speed is ${Math.abs(
          speed - restrictions[area]
        )} km/h faster than the allowed speed of ${
          restrictions[area]
        } - ${'reckless driving'}`
      );
    }
  }
}

roadRadar(21, 'residential');
