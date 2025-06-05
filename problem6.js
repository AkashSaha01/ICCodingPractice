function findShortestWord(str) {
  const words = str
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0);
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }

  console.log(shortest);
}
findShortestWord("Hello everyone how are you?");
