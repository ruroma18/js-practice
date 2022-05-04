'use strict'

class Book {
  constructor(author, bookName, publishingYear, publishHouse) {
    this.author = author;
    this.bookName = bookName;
    this.publishingYear = publishingYear;
    this.publishHouse = publishHouse;
  };

  get author() {
    return this._author.trim()
  }

  set author(newAuthor) {
    if (typeof (newAuthor) != 'string') {
      throw new Error('Author must be a string!');
    }

    if (newAuthor.trim() === '') {
      throw new Error('Author name cannot be empty');
    }
    this._author = newAuthor;
  }

  get bookName() {
    return this._bookName.trim()
  }

  set bookName(newBookName) {
    if (typeof (newBookName) != 'string') {
      throw new Error('Book must be a string!');
    }

    if (newBookName.trim() === '') {
      throw new Error('Book name cannot be empty');
    }
    this._bookName = newBookName;
  }

  get publishingYear() {
    return this._publishingYear.trim()
  }

  set publishingYear(newPublishingYear) {
    if (typeof (newPublishingYear) != 'number') {
      throw new Error('Year of publishing must be a number!');
    }

    if (newPublishingYear === '') {
      throw new Error('Year of publishing name cannot be empty');
    }
    this._publishingYear = newPublishingYear;
  }

  get publishHouse() {
    return this._publishHouse.trim()
  }

  set publishHouse(newPublishHouse) {
    if (typeof (newPublishHouse) != 'string') {
      throw new Error('Publishing house must be a string!');
    }

    if (newPublishHouse.trim() === '') {
      throw new Error('Book name cannot be empty');
    }
    this._publishHouse = newPublishHouse;
  }

};

class eBook extends Book {
  constructor(author, bookName, publishingYear, publishHouse, format, eNumber) {
    super(author, bookName, publishingYear, publishHouse);
    this.format = format;
    this.eNumber = eNumber;
  };

  get format() {
    return this._format.trim()
  }

  set format(newFormat) {
    if (typeof (newFormat) != 'string') {
      throw new Error('Format must be a string!');
    }

    if (newFormat.trim() === '') {
      throw new Error('Format name cannot be empty');
    }
    this._format = newFormat;
  }

  get eNumber() {
    return this._eNumber.trim()
  }

  set eNumber(newENumber) {
    if (typeof (newENumber) != 'number') {
      throw new Error('Eloctronic number must be a number!');
    }

    if (newENumber === '') {
      throw new Error('Eloctronic number name cannot be empty');
    }
    this._eNumber = newENumber;
  }
};

const book1 = new Book('User', 'Who is User', 1989, 'Kyiv');
const eBook2 = new eBook('Nan', 'Who is Nan', 2011, 'Kyiv', 'pdf', 12313123);