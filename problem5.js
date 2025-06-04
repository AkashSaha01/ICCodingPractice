var mergedArray = (a, b) => {
  var combined = [...a, ...b];
  console.log(
    "First try for Sorted merged array : " + combined.sort((x, y) => x - y)
  );
};

var mergedArrayAlternative = (a, b) => {
  var combined = [...a];
  // console.log(combined);
  combined.push(...b);
  console.log("Another Try for sorting : " + combined.sort((x, y) => x - y));
};
mergedArray([2, 8, 6, 11, 3], [9, 5, 1, 2]);
mergedArrayAlternative([2, 8, 6, 11, 3], [9, 5, 1, 2]);
