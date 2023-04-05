function timeToWalk(steps, meters, speedKmH) {
  let distanceMeters = steps * meters;
  let speedToSec = (speedKmH * 1000) / 3600;
  let rest = Math.floor(distanceMeters / 500);
  let minutes = Math.floor(distanceMeters / speedToSec / 60) + rest;
  let seconds = Math.round((distanceMeters / speedToSec) % 60);
  let hours = 0;

  if (minutes > 60) {
    hours += Math.floor(minutes / 60);
    minutes -= hours * 60;
  }

  console.log(
    `${hours > 9 ? hours : '0' + hours}:${
      minutes > 9 ? minutes : '0' + minutes
    }:${seconds}`
  );
}

timeToWalk(8000, 0.6, 5);
