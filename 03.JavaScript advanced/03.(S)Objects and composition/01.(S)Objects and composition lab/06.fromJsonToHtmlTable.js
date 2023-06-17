function fromJsonToHtmlTable(input) {

  let parsed = JSON.parse(input);

  let output = [];
  let firstLine = [];

  output.push('<table>');

  let keys = Object.keys(parsed[0]);
  if (keys.length > 0) {
      for (let key of keys) {
          firstLine.push(`<th>${escapeHtml(key)}</th>`);
      }

      output.push(`  <tr>${firstLine.join('')}</tr>`);
  }

  for (let obj of parsed) {
      let secondLine = [];
      for (let key of keys) {
          let currentKey = obj[key];
          secondLine.push(`<td>${escapeHtml(currentKey)}</td>`);
      }

      output.push(`  <tr>${secondLine.join('')}</tr>`);

  }

  output.push('</table>');

  return output.join('\n');

  function escapeHtml(input) {
      let inputStr = input.toString();
      let pattern = /[&<>" ]/g;

      let escapes = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          ' ': '&nbsp;',

      };

      return inputStr.replace(pattern, a => escapes[a]);
  }
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
