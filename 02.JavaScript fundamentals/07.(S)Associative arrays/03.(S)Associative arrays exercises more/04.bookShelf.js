function bookShelf(input) {
  const bookShelf = {};

  input.forEach((line) => {
    if (line.includes('->')) {
      const shelf = line.split(' -> ').join(' ');

      const isIdTaken = checkId(bookShelf, shelf);
      if (!isIdTaken) {
        bookShelf[shelf] = [];
      }
    } else {
      const [title, author, genre] = line.split(/: |, /g);

      for (const key in bookShelf) {
        if (key.includes(genre)) {
          bookShelf[key].push({ author, title });
        }
      }
    }
  });

  const sorted = Object.entries(bookShelf).sort((a, b) => {
    return b[1].length - a[1].length;
  });

  sorted.forEach((el) => {
    const [id, genre] = el[0].split(' ');
    console.log(`${id} ${genre}: ${el[1].length}`);

    const sortedBook = Object.entries(
      el[1].sort((a, b) => {
        return a.title.localeCompare(b.title);
      })
    );

    sortedBook.forEach((el) => {
      console.log(`--> ${el[1].title}: ${el[1].author}`);
    });
  });

  function checkId(object, shelf) {
    const id = shelf.split(' ').shift();
    for (const key in object) {
      if (key.includes(id)) {
        return true;
      }
    }
  }
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

bookShelf([
  '1 -> mystery',
  '2 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Lions and Rats: Gabe Roads, history',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
]);
