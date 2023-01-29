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
  let countrySorted = Object.entries(travelList).sort();

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

travelTime([
  'Kalimdor > Orgrimar > 0',
  'Kalimdor > Orgrimar > 2',
  'Bulgaria > Sofia > 25030',
  'Bulgaria > Sofia > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Bochko > 555',
  'Albania > FAKE > -555',
  'Bulgaria > Bochko > 25010',
  'Bulgaria > Bochko > 0',
  'Bulgaria > Sofia > 0',
]);
