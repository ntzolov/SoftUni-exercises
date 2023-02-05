function travelTime(data) {
  let travelList = {};
  for (const line of data) {
    let currLine = line.split(' > ');
    let country = currLine[0];
    let city = currLine[1];
    let price = +currLine[2];

    if (!travelList[country] && price >= 0) {
      travelList[country] = {};
      travelList[country][city] = price;
    } else if (!travelList[country][city] && price >= 0) {
      if (travelList[country][city] === 0) {
        continue;
      }
      travelList[country][city] = price;
    } else {
      if (price < travelList[country][city] && price >= 0) {
        if (travelList[country][city] === 0) {
          continue;
        }
        travelList[country][city] = price;
      }
    }
  }
  let countrySorted = Object.entries(travelList).sort((a, b) => {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
  });

  let result = '';
  for (let [country, object] of countrySorted) {
    result += `${country} ->`;
    let citySorted = Object.entries(object).sort(
      (a, b) => a[1] - b[1] || a[0].localeCompare(b[0])
    );
    for (let [city, price] of citySorted) {
      result += ` ${city} -> ${price}`;
    }
    console.log(result);
    result = '';
  }
}
this
travelTime([
  'Bulgaria > Sofia > 25000',
  'aaa > Sofia > 1',
  'aa > Orgrimar > 0',
  'Albania > Tirana > 25000',
  'zz > Aarna > 25010',
  'Bulgaria > Lukovit > 10',
]);
