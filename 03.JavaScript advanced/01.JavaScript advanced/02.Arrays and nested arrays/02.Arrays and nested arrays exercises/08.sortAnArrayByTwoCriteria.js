function sortAnArrayByTwoCriteria(arr) {
  return arr.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n')
}

sortAnArrayByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)