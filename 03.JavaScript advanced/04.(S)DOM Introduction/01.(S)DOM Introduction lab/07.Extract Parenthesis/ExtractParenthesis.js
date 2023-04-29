function extract(content) {
  content = document.getElementById('content').textContent
  let pattern = /\((?<word>[A-Za-z ]+)\)/g;
  let result = [];

  let matches = pattern.exec(content);
  while (matches) {
    let word = matches.groups.word;
    result.push(word);

    matches = pattern.exec(content);
  }
  return result.join('; ');
}
