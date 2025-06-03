var sum = 0;
var countPairs = (givenInput) => {
  for (let i = 0; i < givenInput.length; i++) {
    if (Number(givenInput[i]) % 2 == 0) {
      sum++;
    }
  }
  console.log(sum);
};
countPairs("a1b2c4d6");
