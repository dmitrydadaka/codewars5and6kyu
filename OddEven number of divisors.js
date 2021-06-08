function oddity(n){
    return Math.sqrt(n)%1 ? "even" : "odd";
  }
  
  function oddity(n) {
  let count=0
  for (let i = 1; i <= Math.sqrt(n) + 1; i++){ 
  if (n % i == 0) count += (Math.floor(n / i) == i) ? 1 : 2
  } 
  if (count % 2 == 0) return 'even'
  return 'odd'
  }
   
  function oddity(n) {
      let count = 0; 
      for (let i = 1; i <= Math.sqrt(n) + 1; i++)  { 
      if (n % i == 0)  count += (Math.floor(n / i) == i) ? 1 : 2; 
      } 
      if (count % 2 == 0) return "even" 
      return "odd" 
  } 