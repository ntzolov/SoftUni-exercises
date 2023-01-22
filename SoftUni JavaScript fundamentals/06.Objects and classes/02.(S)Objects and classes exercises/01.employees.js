function employees(input) {
    let list = {};
    for (const employees of input) {
      list.name = employees
      list.personalId = employees.length
      console.log(`Name: ${list.name} -- Personal Number: ${list.personalId}`);
    }
}

employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
  ]
  )