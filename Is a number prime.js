function isPrime(n){
    for(let i=2;i<(n<100000?n:100000);i++){
      if(n%i==0)return false
      }
    return n>1
  }
  
  
  function isPrime(n){
    if(n<2||n%1) return false
    if(n==2||n==3)return true
    for(let i=2;i<(n<100000?n:100000);i++){
      if(n%i==0)return false
      }
    return true
  }