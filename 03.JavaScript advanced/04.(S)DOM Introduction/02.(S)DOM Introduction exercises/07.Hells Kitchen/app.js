function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);
  const input = document.querySelector('textarea');
  const outputRestaurants = document.querySelector('#bestRestaurant>p');
  const outputWorkers = document.querySelector('#workers>p');

  function onClick() {
    const array = JSON.parse(input.value);
    const restaurants = {};

    array.forEach((line) => {
      const tokens = line.split(' - ');
      const name = tokens[0];
      const workersArray = tokens[1].split(', ');
      let workers = [];

      workersArray.forEach((worker) => {
        const tokens = worker.split(' ');
        const workerName = tokens[0];
        const salary = Number(tokens[1]);
        workers.push({ name: workerName, salary });
      });

      if (restaurants[name]) {
        workers = workers.concat(restaurants[name].workers);
      }

      workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
      let bestSalary = workers[0].salary;
      let averageSalary =
        workers.reduce((sum, worker) => sum + worker.salary, 0) /
        workers.length;

      restaurants[name] = {
        workers,
        averageSalary,
        bestSalary,
      };
    });

    let bestRestaurantSalary = 0;
    let bestRestaurant = undefined;

    for (let name in restaurants) {
      if (restaurants[name].averageSalary > bestRestaurantSalary) {
        bestRestaurantSalary = restaurants[name].averageSalary;
        bestRestaurant = { name, ...restaurants[name] };
      }
    }

    outputRestaurants.textContent = `Name: ${
      bestRestaurant.name
    } Average Salary: ${bestRestaurantSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    let workersToPrint = [];
    bestRestaurant.workers.forEach((worker) =>
      workersToPrint.push(
        `Name: ${worker.name} With Salary: ${worker.salary}`
      )
    );
    outputWorkers.textContent = workersToPrint.join(' ')
  }
}
