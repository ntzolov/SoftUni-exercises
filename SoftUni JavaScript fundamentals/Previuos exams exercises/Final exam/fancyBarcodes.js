function fancyBarcodes(input) {
  let numberOfLines = input.shift();
  let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

  for (let i = 0; i < numberOfLines; i++) {
    let line = input.shift();
    let matches = pattern.exec(line);
    if (matches) {
      let barcode = matches.groups.barcode;
      let code = '';
      for (let symbol of barcode) {
        if (symbol.charCodeAt() >= 48 && symbol.charCodeAt() <= 57) {
          code += symbol;
        }
      }
      if (code) {
        console.log(`Product group: ${code}`);
      } else {
        console.log(`Product group: 00`);
      }
    } else {
      console.log('Invalid barcode');
    }
  }
}

fancyBarcodes([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);
