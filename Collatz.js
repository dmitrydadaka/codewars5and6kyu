function collatz(n){
    let s=''
    while(n>1){
      s+=`${n}->`
      n=n%2?n*3+1:n/2
      }
      return s+'1'
    }
    
    // Print the collatz sequence starting with positive integer n.
    // Ex: collatz(4) should return "4->2->1"
    function collatz(n){
      return n>1?n.toString()+'->'+collatz(n%2?n*3+1:n/2):'1'
    }