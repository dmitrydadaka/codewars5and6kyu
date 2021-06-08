function twistedSum(n) {
    return [...Array(n+1)].reduce((a,c,i)=>a+([...i+''].reduce((a,c)=>a+ +c,0)),0)
  }
  
  function twistedSum(n) {
    return n < 2? n : digits(n) + twistedSum(n-1);
  }
  function digits(n) {
      let sum = 0;
      while (n > 9) {
          sum += n%10;
          n = Math.floor(n/10);
      }
      return sum+n;
    }
  
  function twistedSum(n) {
    return [...Array(n+1)].reduce((a,c,i)=>a+((i+'').split('').reduce((a,c)=>a+ +c,0)),0)
  }