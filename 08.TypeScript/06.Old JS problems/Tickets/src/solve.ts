class Ticket {
  destination: string
  price: number
  status: string

  constructor(destination: string, price: number, status: string) {
    this.destination = destination
    this.price = price
    this.status = status
  }
}

const solve = (tickets: string[], sortCriterion: string): Ticket[] => {
  let ticketsArray: Ticket[] = []

  tickets.forEach(x => {
    const [destination, price, status] = x.split('|')
    ticketsArray.push(new Ticket(destination, Number(price), status))
  })

  switch (sortCriterion) {
    case 'destination':
      ticketsArray.sort((a, b) => a.destination.localeCompare(b.destination))
      break;
    case 'price':
      ticketsArray.sort((a, b) => a.price - b.price)
      break;
    case 'status':
      ticketsArray.sort((a, b) => a.status.localeCompare(b.status))
      break;
  }

  return ticketsArray
}

console.log(solve(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed',
  'Sofia|23.99|available'],
  'status'
));