function aMinerTask(data) {
  let resources = {};
  for (let i = 0; i < data.length; i += 2) {
    let resource = data[i];
    let quantity = +data[i + 1];
    if (!resources[resource]) {
    resources[resource] = quantity;
    } else {
      resources[resource] += quantity;
    }
  }

  for (let resource in resources) {
    console.log(`${resource} -> ${resources[resource]}`);
  }
}

aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17', 'Gold', '15']);
