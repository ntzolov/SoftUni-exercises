function destinationMapper(input) {
  let text = input
  let pattern = /([=\/])([A-Z][A-Za-z][A-Za-z]+)\1/g;
  let matches = text.matchAll(pattern);
  let destinations = []

  for (let match of matches) {
    destinations.push(match[2])
  }
  let destinationsAsString = destinations.join('');

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${destinationsAsString.length}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
