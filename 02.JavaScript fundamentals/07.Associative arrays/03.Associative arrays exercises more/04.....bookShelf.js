// i have to sort it

function bookShelf(input) {
  const bookShelf = {};

  input.forEach((line) => {
    if (line.includes('->')) {
      const [id, genre] = line.split(' -> ');
      if (!bookShelf.hasOwnProperty(id)) {
        bookShelf[id] = {};
        bookShelf[id][genre] = [];
      }
    } else {
      const [title, rest] = line.split(': ');
      const [author, genre] = rest.split(', ');

      for (let id in bookShelf) {
        if (bookShelf[id].hasOwnProperty(genre)) {
          bookShelf[id][genre].push({ title, author });
        }
      }
    }
  });

  console.log(bookShelf);
}

bookShelf([
  '1 -> history',
  '1 -> action',
  'Death in Time: Criss Bell, mystery',
  '2 -> mystery',
  '3 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Hurting Secrets: Dustin Bolt, action',
  'Future of Dawn: Aiden Rose, sci-fi',
  'Lions and Rats: Gabe Roads, history',
  '2 -> romance',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
  'Pilots of Stone: Brook Jay, history',
]);
