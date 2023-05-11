function loadRepos() {
  let httpRequest = new XMLHttpRequest();
  httpRequest.addEventListener('readystatechange', load);
  let url = 'https://api.github.com/users/testnakov/repos';

  function load() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      document.getElementById('res').innerText = httpRequest.responseText;
    }
  }
  httpRequest.open('GET', url);
  httpRequest.send();

  console.log(httpRequest.responseText);
}
