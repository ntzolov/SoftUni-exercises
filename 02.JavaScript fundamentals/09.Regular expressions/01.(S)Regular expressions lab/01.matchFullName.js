function matchFullName(text) {
  let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
  let result = text.match(regEx)
  console.log(result.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")