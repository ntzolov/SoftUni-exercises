function loadRepos() {
  const country = document.getElementById('search-country').value;
  let url = `https://restcountries.com/v3.1/all?fields=name,flags`;
  const list = document.getElementById('country-info');
  list.style.listStyle = 'none';

  fetch(url)
    .then((response) => {
      if (response.ok !== true) {
        throw new Error('Something went wrong :(');
      }
      return response.json();
    })
    .then((response) => {
      list.innerText = '';
      let isFound = false
      response.forEach((obj) => {
        if (obj.name.common.toLowerCase() === country.toLowerCase()) {
          isFound = true
          const li = document.createElement('li');
          const img = document.createElement('img');
          const p = document.createElement('p');
          p.innerText = 'Official name: ' + obj.name.official;
          img.src = obj.flags.png;
          li.style.textAlign = 'center';
          li.appendChild(p);
          li.appendChild(img);
          list.appendChild(li);
        }
      });
      if (!isFound) {
        throw new Error('No country found')
      }
    })
    .catch((error) => {
      list.innerText = '';
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.style.color = 'red';
      p.innerText = error;
      li.appendChild(p);
      list.appendChild(li);
    });
}
