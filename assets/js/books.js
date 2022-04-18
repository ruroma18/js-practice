'use strict'

class Book {
  constructor(author, bookName, publishingYear, publishHouse) {
    this.author = author;
    this.bookName = bookName;
    this.publishingYear = publishingYear;
    this.publishHouse = publishHouse;
  };
};

class eBook extends Book {
  constructor(author, bookName, publishingYear, publishHouse, format, eNumber) {
    super(author, bookName, publishingYear, publishHouse);
    this.format = format;
    this.eNumber = eNumber;
  };
};

const book1 = new Book('User', 'Who is User', 1989, 'Kyiv');
const eBook2 = new eBook('Nan', 'Who is Nan', 2011, 'Kyiv', 'pdf', 12313123);