function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const list = Array.from(document.querySelectorAll('tbody tr'));
    let searchInput = document.querySelector('#searchField');

    for (let tr of list) {
      console.log(tr);
      if (tr.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
        tr.classList.add('select');
      } else {
        tr.classList.remove('select');
      }
    }

    searchInput.value = '';
  }
}
