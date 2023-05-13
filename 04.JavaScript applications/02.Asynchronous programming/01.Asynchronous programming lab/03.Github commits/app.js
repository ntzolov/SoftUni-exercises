function loadCommits() {
  const username = document.getElementById('username').value;
  const repo = document.getElementById('repo').value;
  const list = document.getElementById('commits');
  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`${response.status} (${response.statusText})`);
      } else {
        return response.json();
      }
    })
    .then((body) => {
      list.innerText = '';
      body.forEach((obj) => {
        const li = document.createElement('li');
        li.innerText = `${obj.commit.author.name}: ${obj.commit.message}`;
        list.appendChild(li);
      });
    })
    .catch((err) => {
      list.innerText = '';
      const li = document.createElement('li');
      li.innerText = err;
      list.appendChild(li);
    });
}
