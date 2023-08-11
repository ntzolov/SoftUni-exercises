class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error('Not enough space in the collection.');
    }

    this.books.push({
      bookName,
      bookAuthor,
      paid: false,
    });

    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const selectedBook = this.books.find((b) => {
     return  b.bookName === bookName;
    });

    if (!selectedBook) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (selectedBook.paid) {
      throw new Error(`${bookName} has already been paid.`);
    }

    selectedBook.paid = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const selectedBook = this.books.find((b) => {
      return b.bookName === bookName;
    });

    if (!selectedBook) {
      throw new Error(`The book, you're looking for, is not found.`);
    }

    if (!selectedBook.paid) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    const index = this.books.findIndex((b) => {
      return b.bookName === bookName;
    });
    this.books.splice(index, 1);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      const toPrint = [];
      toPrint.push(
        `The book collection has ${
          this.capacity - this.books.length
        } empty spots left.`
      );

      const sortedBooks = this.books.sort((a, b) => {
        return a.bookName.localeCompare(b.bookName);
      });

      sortedBooks.map((b) => {
        const isPaid = b.paid ? 'Has Paid' : 'Not Paid';
        toPrint.push(`${b.bookName} == ${b.bookAuthor} - ${isPaid}.`);
      });

      return toPrint.join('\n').trim();
    }

    const selectedBook = this.books.find((b) => {
      return b.bookAuthor === bookAuthor;
    });

    if (!selectedBook) {
      throw new Error(`${bookAuthor} is not in the collection.`);
    }

    const isPaid = selectedBook.paid ? 'Has Paid' : 'Not Paid';
    return `${selectedBook.bookName} == ${selectedBook.bookAuthor} - ${isPaid}.`;
  }
}

const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));

