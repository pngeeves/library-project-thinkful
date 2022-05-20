function findAccountById(accounts, id) {
  return accounts.find((acc1) => acc1.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) =>
  accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let borrowTot = 0;
const userId = account.id;
books.forEach(books => books.borrows.forEach(idComp => (userId === idComp.id) && borrowTot++))
return borrowTot;
}

function getBooksPossessedByAccount(account, books, authors) {
const accId = account.id;

let accBorrow = books.filter(borrowed => borrowed.borrows[0].id === account.id 
  && borrowed.borrows[0].returned === false);
let withAuthor = accBorrow.map((bookInfo) => ({...bookInfo, author:authors.find((author) => 
  author.id === bookInfo.authorId)}));

return withAuthor ;
 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
