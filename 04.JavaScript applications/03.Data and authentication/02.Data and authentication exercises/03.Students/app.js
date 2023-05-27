addEvents();
loadStudents();

function addEvents() {
  document.getElementById('form').addEventListener('submit', addStudent);
}

async function addStudent(e) {
  const url = 'http://localhost:3030/jsonstore/collections/students';
  e.preventDefault();
  const formData = Object.fromEntries(
    new FormData(document.getElementById('form'))
  );

  const response = await fetch(url, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const tbody = document.querySelector('#results tbody');
  const tr = document.createElement('tr');

  for (const key in formData) {
    if (formData[key] === '') {
      return;
    }

    const td = document.createElement('td');
    td.textContent = formData[key];
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
  document.getElementById('form').reset();
}

async function loadStudents() {
  const url = 'http://localhost:3030/jsonstore/collections/students';
  const response = await fetch(url);
  const data = await response.json();

  const studentsObj = Object.values(data);

  for (const key in studentsObj) {
    const tbody = document.querySelector('#results tbody')
    const tr = document.createElement('tr');

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = studentsObj[key].firstName;

    const tdlastName = document.createElement('td');
    tdlastName.textContent = studentsObj[key].lastName;

    const tdfacultyNumber = document.createElement('td');
    tdfacultyNumber.textContent = Number(studentsObj[key].facultyNumber);

    const tdfGrade = document.createElement('td');
    tdfGrade.textContent = Number(studentsObj[key].grade);

    tr.appendChild(tdFirstName);
    tr.appendChild(tdlastName);
    tr.appendChild(tdfacultyNumber);
    tr.appendChild(tdfGrade);
    tbody.appendChild(tr);
  }
}
