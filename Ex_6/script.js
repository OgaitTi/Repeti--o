function isPrime(value) {
    if (value < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) {
        return false;
      }
    }
    
     
  return true;
  }
  
  function countdownWithPrimes() {
    for (let i = 30; i >= 1; i--) {
      if (isPrime(i)) {
        console.log(`[${i}]`);
      } else {
        console.log(i);
      }
      }
  
    }
  
  countdownWithPrimes();