function findMedian(arr) {
  if (arr.length === 0) return null;

  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

console.log(findMedian([5, 2, 8, 1, 9]));
console.log(findMedian([4, 2, 7, 1, 9, 10]));
