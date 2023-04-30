function fromJSONToHTMLTable(json) {
  let jsonToArray = JSON.parse(json);
  let result = [];

  result.push('<table>');
  let row = [];
  row.push('  <tr>');
  for (let key in jsonToArray[0]) {
    row.push(`<th>${escapeString(key)}</th>`);
  }
  row.push('</tr>');
  result.push(row.join(''));

  row = [];
  for (let obj of jsonToArray) {
    row.push('  <tr>');
    for (let key in obj) {
      row.push(`<td>${escapeString(obj[key])}</td>`);
    }
    row.push('</tr>');
    result.push(row.join(''));
    row = [];
  }
  result.push('</table>');

  function escapeString(key) {
    let entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return key.toString().replace(/[&<>"']/g, (key) => entityMap[key]);
  }

  return result.join('\n');
}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
