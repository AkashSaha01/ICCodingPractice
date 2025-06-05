const givenArray = [3, 4, 5, 1, 9, 7, 2, 6, 4, 6, 5, 2];

var unique = givenArray.filter((value, index) => {
  return givenArray.indexOf(value) === index;
});

console.log(unique.sort());
// If i use new set, then it will automatically remove my duplicate data
const givenArray2 = [5, 8, 9, 6, 1, 2, 7, 3, 5, 6, 4];
var myuniqueArray = [...new Set(givenArray)];
console.log("Second Array : " + myuniqueArray);
