function pieceOfPie(flavors, startIndex, endIndex) {
  return flavors.slice(flavors.indexOf(startIndex), flavors.indexOf(endIndex) + 1);
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))