function search() {
   let list = Array.from(document.querySelectorAll('#towns li'));
   let searchText = document.getElementById('searchText').value
   let result = document.getElementById('result')
   let countMatches = 0
   console.log(list);

   for (let el of list) {
      if (el.textContent.includes(searchText)) {
         countMatches++
         el.style.textDecoration = 'underline'
         el.style.fontWeight = 'bold'
         result.innerHTML = `${countMatches} matches found`
      }
   }
   document.getElementById('searchText').value = ''; 
}
