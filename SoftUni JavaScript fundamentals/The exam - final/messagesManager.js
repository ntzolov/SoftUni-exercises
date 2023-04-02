function messagesManager(input) {
  class User {
    constructor(username, sent, received) {
      this.username = username;
      this.sent = sent;
      this.received = received;
    }
  }

  let users = [];
  let messagesCapacity = Number(input.shift());

  for (let line of input) {
    if (line === 'Statistics') {
      break;
    }

    line = line.split('=');
    let command = line.shift();

    if (command === 'Add') {
      let [username, sent, received] = line;
      sent = Number(sent);
      received = Number(received);
      if (!users[username]) {
        let currUser = new User(username, sent, received);
        users[username] = currUser;
      }
    } else if (command === 'Message') {
      let [sender, receiver] = line;
      if (users[sender]) {
        if (users[receiver]) {
          users[sender].sent += 1;
          users[receiver].received += 1;
          if (users[sender].sent + users[sender].received >= messagesCapacity) {
            delete users[sender];
            console.log(`${sender} reached the capacity!`);
          }
          if (
            users[receiver].sent + users[receiver].received >=
            messagesCapacity
          ) {
            delete users[receiver];
            console.log(`${receiver} reached the capacity!`);
          }
        }
      }
    } else if (command === 'Empty') {
      let user = String(line);
      if (user === 'All') {
        for (let user in users) {
          delete users[user];
        }
      }
      if (users[user]) {
        delete users[user];
      }
    }
  }

  let usersSize = Object.entries(users).length;
  console.log(`Users count: ${usersSize}`);

  for (let user in users) {
    console.log(`${user} - ${users[user].sent + users[user].received}`);
  }
}

messagesManager([
  '20',
  'Add=Mark=3=9',
  'Add=Berry=5=5',
  'Add=Clark=4=0',
  'Empty=Berry',
  'Add=Blake=9=3',
  'Add=Michael=3=9',
  'Add=Amy=9=9',
  'Message=Blake=Amy',
  'Message=Michael=Amy',
  'Statistics',
]);
