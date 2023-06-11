function solve() {
  debugger
  class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.online = false;
    }

    render(id) {
      this.article = document.createElement('article');
      this.article.innerHTML = `
      <div class="title">${this.firstName} ${this.lastName}<button id="info">&#8505;</button></div>
      <div class="info">
        <span>&phone; ${this.phoneNumber}</span>
        <span>&#9993; ${this.email}</span>
      </div>`;

      document.getElementById(id).appendChild(this.article);
      // this.par = document.querySelector('main');
      // this.par.appendChild(this.article);
      // console.log(this.par);
    }
  }

  let contacts = [
    new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
    new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
    new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com'),
  ];
  contacts.forEach((c) => c.render('main'));

  // After 1 second, change the online status to true
  setTimeout(() => (contacts[1].online = true), 2000);
}
