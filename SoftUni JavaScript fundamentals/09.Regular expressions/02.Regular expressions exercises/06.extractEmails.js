function extractEmails(string) {
  let pattern =
  /(?<mail>\s[0-9A-Za-z]+([\.\-_]*([0-9A-Za-z]+))@[A-Za-z\-]+\.[A-Za-z\-]+(\.[A-Za-z\-]+)*)/gm
  let validate = pattern.exec(string);
  while (validate !== null) {
    console.log(validate.groups.mail);
    validate = pattern.exec(string);
  }
}

extractEmails(
  'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'
);
