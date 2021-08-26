function getScore(n) {
    return n?n*50+getScore(--n):0
  }
  
  function getScore(n) {
   return n*++n*25
  }