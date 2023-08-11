function solve() {
  const fName = document.getElementById('fname');
  const lName = document.getElementById('lname');
  const email = document.getElementById('email');
  const birth = document.getElementById('birth');
  const position = document.getElementById('position');
  const salary = document.getElementById('salary');

  let sumToPrint = document.getElementById('sum');
  let sum = 0;

  const btnAddWorker = document.getElementById('add-worker');
  btnAddWorker.addEventListener('click', addWorker);

  let values = {};

  function addWorker(e) {
    e.preventDefault();

    values = {
      fName: fName.value,
      lName: lName.value,
      email: email.value,
      birth: birth.value,
      position: position.value,
      salary: salary.value,
    };

    fName.value = '';
    lName.value = '';
    email.value = '';
    birth.value = '';
    position.value = '';
    salary.value = '';

    for (const input in values) {
      if (values[input] === '') {
        return alert('You have an empty input!');
      }
    }

    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    const tdFName = document.createElement('td');
    tdFName.textContent = values.fName;
    const tdLName = document.createElement('td');
    tdLName.textContent = values.lName;
    const tdEmail = document.createElement('td');
    tdEmail.textContent = values.email;
    const tdBirth = document.createElement('td');
    tdBirth.textContent = values.birth;
    const tdPosition = document.createElement('td');
    tdPosition.textContent = values.position;
    const tdSalary = document.createElement('td');
    tdSalary.textContent = values.salary;
    const tdButtons = document.createElement('td');
    const btnFired = document.createElement('button');
    btnFired.classList.add('fired');
    btnFired.textContent = 'Fired';
    btnFired.addEventListener('click', fired);
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit');
    btnEdit.textContent = 'Edit';
    btnEdit.addEventListener('click', edit);
    tdButtons.appendChild(btnFired);
    tdButtons.appendChild(btnEdit);

    tr.appendChild(tdFName);
    tr.appendChild(tdLName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdBirth);
    tr.appendChild(tdPosition);
    tr.appendChild(tdSalary);
    tr.appendChild(tdButtons);

    tbody.appendChild(tr);

    sum += Number(values.salary);
    sumToPrint.textContent = sum.toFixed(2);
  }

  function edit(e) {
    e.preventDefault();

    const tr = e.target.parentElement.parentElement;
    console.log(tr.children);

    fName.value = tr.children[0].textContent;
    lName.value = tr.children[1].textContent;
    email.value = tr.children[2].textContent;
    birth.value = tr.children[3].textContent;
    position.value = tr.children[4].textContent;
    salary.value = tr.children[5].textContent;

    sum -= Number(tr.children[5].textContent);
    sumToPrint.textContent = sum.toFixed(2);
    tr.remove();
  }

  function fired(e) {
    e.preventDefault();

    const tr = e.target.parentElement.parentElement;

    sum -= Number(tr.children[5].textContent);
    sumToPrint.textContent = sum.toFixed(2);
    tr.remove();
  }
}
solve();
