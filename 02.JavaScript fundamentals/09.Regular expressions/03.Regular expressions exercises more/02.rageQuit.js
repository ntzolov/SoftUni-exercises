function rageQuit(input) {
  let pattern = /(?<string>[\D]+)(?<number>[0-9]+)/g;
  let match = pattern.exec(input);
  // let uniqueSymbols = [];
  let result = '';

  while (match) {
    let string = match.groups.string;
    let number = Number(match.groups.number);

    // for (let symbol of string) {
    //   if (!uniqueSymbols.includes(symbol.toUpperCase())) {
    //     uniqueSymbols.push(symbol.toUpperCase());
    //   }
    // }

    result += string.toUpperCase().repeat(number);

    match = pattern.exec(input);
  }

  let unique2 = [...new Set(result.split(''))];

  console.log(`Unique symbols used: ${unique2.length}`);
  console.log(result);
}

rageQuit(
  `e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12\`aD<l&$W&)*yF1WLV9_GmTf(d0($!$\`e/{D'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh\`@gu#Z#p"Z<v13fI]':\Iz.17*W:\mwV\`z-15g@hUYE{_$~}+X%*nytkW15`
);
