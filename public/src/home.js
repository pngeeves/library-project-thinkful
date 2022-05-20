function getTotalBooksCount(books) {
 let bookTotal = 0;
  
 for(const book1 of books){
    bookTotal += 1;
  }
return bookTotal;
}
  
function getTotalAccountsCount(accounts) {
let accTotal = 0;
  
 for(const account1 of accounts){
    accTotal += 1;
  }
return accTotal ;
}

function getBooksBorrowedCount(books) {
 let borrowTotal = 0;

let borrowBook = books.filter(book2 => book2.borrows[0].returned === false);
for(const checked of borrowBook){
  borrowTotal += 1;
}
return borrowTotal;
}

function sortObjectByVal(obj){
  let keys = Object.keys(obj);
keys.sort((keyA, keyB) => {
  if(obj[keyA] > obj[keyB]){
    return -1;
  } else {
    return 1;
  }
})
return keys;
}

function getMostCommonGenres(books) {
let genreArr = books.map(({genre}) => genre);
const popGenre = {};

genreArr.forEach(total => {
popGenre[total] = (popGenre[total] || 0) +1;});

let commonGenre = sortObjectByVal(popGenre);
return commonGenre.map(genre => ({name:genre, count:popGenre[genre]})).slice(0,5);
}


function getMostPopularBooks(books) {
 let titleBorrowArr = books.map( item => (
    {name: item.title, count: item.borrows.length}));

  let topBooksTot = titleBorrowArr.sort((countA,countB) => 
  (countA.count < countB.count)? 1 : -1).slice(0,5);
  
  return topBooksTot;
}


function getMostPopularAuthors(books, authors) {
let authOb = books.reduce((acc,{authorId, borrows}) =>{
    if(acc[authorId]){
      acc[authorId] += borrows.length;
    } else {
      acc[authorId] = borrows.length;
    }
  return acc;
  }, {})
  
let sortAuthOb = sortObjectByVal(authOb);

return sortAuthOb.map(authorId => {
    let author = authors.find(auth => auth.id==authorId);
    let name = `${author.name.first} ${author.name.last}`;
      let retObj = {name, count:authOb[authorId]};
      return retObj;
  }).slice(0,5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
