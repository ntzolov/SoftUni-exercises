function winningTicket(tickets) {
  let isValid = /.{20}/g;
  let checkTicket = /(?<line1>[@#$^]{6,10}).*?(?<line2>[@#$^]{6,10})/g;

  let ticketsArray = tickets.split(/,\s+/g);

  for (let ticket of ticketsArray) {
    ticket = ticket.trim();
    let valid = isValid.test(ticket);
    if (!valid) {
      console.log(`invalid ticket`);
    } else {
      let check = checkTicket.exec(ticket);
      if (!check) {
        console.log(`ticket "${ticket}" - no match`);
      }
      while (check) {
        let line1 = check.groups.line1;
        let line2 = check.groups.line2;

        if (line1 === line2 && line1.length === 10) {
          console.log(
            `ticket "${ticket}" - ${line1.length}${line1[0]} Jackpot!`
          );
        } else if (line1 === line2 && line1.length > 5 && line1.length < 10) {
          console.log(`ticket "${ticket}" - ${line1.length}${line1[0]}`);
        }
        check = checkTicket.exec(ticket);
      }
    }
  }
}

winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@%@eemo@@@@@@ey');
