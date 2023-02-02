function matchPhoneNumber(data) {
  let text = data[0];
  let regEx = /\+359([ -])2\1\d{3}\1\d{4}\b/g
  let result = text.match(regEx)
  console.log(result.join(', '));
}

matchPhoneNumber([
  '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222',
]);
