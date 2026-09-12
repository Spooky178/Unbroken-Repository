const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
const getTheTitles = function(books) {
    const titleArray = books
    .map(element => element.title)
    return titleArray
};
console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
