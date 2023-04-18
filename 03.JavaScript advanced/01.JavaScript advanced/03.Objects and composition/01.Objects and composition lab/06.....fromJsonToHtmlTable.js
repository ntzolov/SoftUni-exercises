function fromJsonToHtmlTable(json) {
  let jsonToArray = JSON.parse(json);
  let result = [];

  result.push('<table>');
  let row = [];
  row.push('  <tr>');
  for (let key in jsonToArray[0]) {
    row.push(`<th>${key}</th>`);
  }
  row.push('</tr>');
  result.push(row.join(''));

  row = [];
  for (let obj of jsonToArray) {
    row.push('  <tr>');
    for (let key in obj) {
      row.push(`<td>${obj[key]}</td>`);
    }
    row.push('</tr>');
    result.push(row.join(''));
    row = [];
  }
  result.push('</table>');

  function escaper(value) {
    return value
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  console.log(escaper(result.join('\n')));
}

fromJsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
