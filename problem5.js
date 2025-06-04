var mergedArray = (a, b) => {
  var combined = [...a, ...b];
  console.log(combined.sort((x, y) => x - y));
};
mergedArray([2, 8, 6, 11, 3], [9, 5, 1, 2]);
