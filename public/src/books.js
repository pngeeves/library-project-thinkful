function findAuthorById(authors, id) {
  return authors.find((author1) => author1.id === id);
}

function findBookById(books, id) {
  return books.find((books1) => books1.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let returnBook = books.filter(book1 => book1.borrows[0].returned === true);
  let borrowBook = books.filter(book2 => book2.borrows[0].returned === false);

  return bookStatus = [borrowBook, returnBook];
}

function getBorrowersForBook(book, accounts) {
const bookA = book.borrows 
   
const userIds = book.borrows.map(({id}) => id);
const accBorArr = accounts.filter(({id}) => userIds.includes(id)).map(account =>
   ({...account, returned: book.borrows.find(({id})=> id === account.id).returned})).slice(0, 10); 


return accBorArr
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
