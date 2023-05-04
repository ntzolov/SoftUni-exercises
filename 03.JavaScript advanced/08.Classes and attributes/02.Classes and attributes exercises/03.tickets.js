function tickets(array, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }

    static sort(array, type) {
      if (type === 'price') {
        array = array.sort((a, b) => a[type] - b[type]);
      } else {
        array = array.sort((a, b) => a[type].localeCompare(b[type]));
      }
      return array;
    }
  }

  let tickets = [];
  for (let line of array) {
    let [destination, price, status] = line.split('|');
    price = +price;
    tickets.push(new Ticket(destination, price, status));
  }

  let sortedTickets = Ticket.sort(tickets, sortCriteria);
  return sortedTickets;
}

tickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
