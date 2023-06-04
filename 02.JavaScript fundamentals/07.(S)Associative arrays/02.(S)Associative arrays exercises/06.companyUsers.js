function companyUsers(data) {
  let companyIDs = {};

  for (let line of data) {
    let info = line.split(' -> ');
    let name = info[0];
    let id = info[1];

    if (!companyIDs[name]) {
      companyIDs[name] = new Set().add(id)
    } else {
      companyIDs[name].add(id)
    }
  }
  
  let idsToArraySorted = Object.entries(companyIDs).sort();

  for (const company of idsToArraySorted) {
    console.log(company[0]);
    for (let id of company[1]) {
      console.log(`-- ${id}`);
    }
    
  }
}

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345',
]);
