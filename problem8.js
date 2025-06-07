let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

var createBookList = (title, author, copies) => {
  const index = bookTitles.indexOf(title);
  if (index === -1) {
    bookTitles.push(title);
    authorNames.push(author);
    copiesAvailable.push(copies);
  } else {
    console.log(`${title} already exists.`);
  }
};

var addCopies = (title, copiesToAdd) => {
  const index = bookTitles.indexOf(title);
  if (index !== -1) {
    copiesAvailable[index] += copiesToAdd;
  } else {
    console.log(`Book "${title}" not found.`);
  }
};
var sellBook = (title, copiesToSell) => {
  const index = bookTitles.indexOf(title);
  if (index !== -1) {
    if (copiesAvailable[index] >= copiesToSell) {
      copiesAvailable[index] -= copiesToSell;
    } else {
      console.log(`Not enough copies of "${title}" to sell.`);
    }
  } else {
    console.log(`Book "${title}" not found.`);
  }
};

var getDetails = () => {
  const details = [];
  for (let i = 0; i < bookTitles.length; i++) {
    details.push(
      `"${bookTitles[i]}" by "${authorNames[i]}" --> Copies Available: ${copiesAvailable[i]}`
    );
  }
  return details;
};
createBookList("Bohubrihi", "Humayun Ahmed", 2);
createBookList("Sheshe Kobita", "Rabindranath Tagore", 1);
createBookList("Victory", "Daniel Frigson", 1);
addCopies("Bohubrihi", 2);
sellBook("Bohubrihi", 3);

console.log(getDetails());
