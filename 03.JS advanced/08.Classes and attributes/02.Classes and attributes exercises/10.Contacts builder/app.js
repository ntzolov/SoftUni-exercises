function solve() {
  class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this._online = false;
    }

    get online() {
      return this._online;
    }

    set online(value) {
      this._online = value;

      if (this.divName) {
        this.divName.className = this._online ? 'title online' : 'title';
      }
    }

    render(id) {
      this.article = document.createElement('article');
      this.divName = document.createElement('div');
      this.divName.className = this._online ? 'title online' : 'title';
      this.divName.textContent = `${this.firstName} ${this.lastName}`;
      this.btnInfo = document.createElement('button');
      this.btnInfo.innerHTML = '&#8505;';
      this.divName.appendChild(this.btnInfo);
      this.article.appendChild(this.divName);

      this.divInfo = document.createElement('div');
      this.divInfo.className = 'info';
      this.divInfo.style.display = 'none';
      this.spanOne = document.createElement('span');
      this.spanOne.innerHTML = `&phone; ${this.phoneNumber}`;
      this.spanTwo = document.createElement('span');
      this.spanTwo.innerHTML = `&#9993; ${this.email}`;
      this.divInfo.appendChild(this.spanOne);
      this.divInfo.appendChild(this.spanTwo);
      this.article.appendChild(this.divInfo);

      document.getElementById(id).appendChild(this.article);

      this.btnInfo.addEventListener('click', (e) => {
        this.divInfo.style.display =
          this.divInfo.style.display === 'none' ? 'block' : 'none';
      });
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
