var findPrimeNumbers = (givenarray) => {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return givenarray.filter(isPrime);
};

const input = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPrimeNumbers(input));
