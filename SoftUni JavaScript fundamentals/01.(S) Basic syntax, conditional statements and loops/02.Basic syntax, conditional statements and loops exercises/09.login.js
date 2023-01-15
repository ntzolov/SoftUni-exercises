function login(input) {
  let user = input[0];
  let i = 1;
  let counter = 0;
  let isLogged = false;

  let pass = input[i];
  i++;
  while (true) {
    pass = pass.split("");
    pass = pass.reverse();
    pass = pass.join("");

    if (user === pass) {
      console.log(`User ${user} logged in.`);
      isLogged = true;
      break;
    } else {
      if (counter === 3) {
        break;
      }
      console.log("Incorrect password. Try again.");
      counter += 1;
    }
    pass = input[i];
    i++;
  }
  if (counter === 3 && !isLogged) {
    console.log(`User ${user} blocked!`);
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
