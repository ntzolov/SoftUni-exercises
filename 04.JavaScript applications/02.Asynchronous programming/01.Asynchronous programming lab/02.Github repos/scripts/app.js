function loadRepos() {
  const username = document.getElementById('username').value;
  let url = `https://api.github.com/users/${username}/repos`;
  const list = document.getElementById('repos');

  fetch(url)
    .then((response) => {
      console.log(response);
      if (response.ok === false) {
				list.innerHTML = `<p>${response.status} ${response.statusText}</p>`
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((response) => {
      list.innerText = '';
      response.forEach((obj) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = obj['html_url'];
        a.innerText = obj['full_name'];
        li.appendChild(a);
        list.appendChild(li);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
