function makeADictionary(array) {
  let dictionary = [];

  for (const line of array) {
    let currObj = JSON.parse(line);
    for (let key in currObj) {
      let subject = key;
      let text = currObj[key];
      let isSubjectExist = dictionary.find((obj) => obj.Term === subject);
      if (isSubjectExist) {
        isSubjectExist.Definition = text;
        continue;
      }
      let word = {
        Term: subject,
        Definition: text,
      };
      dictionary.push(word);
    }
  }
  console.log(dictionary);
  dictionary = dictionary.sort((a, b) => {
    let x = a.Term.toLowerCase();
    let y = b.Term.toLowerCase();

    return x.localeCompare(y);
  });

  dictionary.forEach((obj) => {
    for (let key in obj) {
      if (key === 'Term') {
        console.log(`${key}: ${obj[key]} => Definition: ${obj.Definition}`);
      }
    }
  });
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Coffee":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
