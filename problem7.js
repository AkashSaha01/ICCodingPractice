const givenArray = [3, 4, 5, 1, 9, 7, 2, 6, 4, 6, 5, 2];

var unique = givenArray.filter((value, index) => {
  return givenArray.indexOf(value) === index;
});

console.log(unique.sort());
