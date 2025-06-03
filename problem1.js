var calculateStrikeRate = (runs, ballsFaced) => {
  if (ballsFaced === 0) {
    console.log("Balls faced cannot be zero.");
    return;
  }
  var strikeRate = (runs * 100) / ballsFaced;
  console.log("The Strike Rate is " + strikeRate.toFixed(2));
};
calculateStrikeRate(240, 115);
