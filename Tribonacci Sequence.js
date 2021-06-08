function tribonacci(signature,n){
    while(signature.length < n)
      signature.push(signature.slice(-3).reduce((total, num)=>{return total+num}));
    return signature.slice(0,n);
  }
  
  function tribonacci(e,n){
    for(i=e.length;i<n;i++){
    a=e.slice(i-3,i).reduce((a,b)=>a+b,0)
    e.push(a)
    }
    return e.slice(0,n)
  }
  
  function tribonacci(e,n){
    for(i=e.length;i<n;i++){
    a=e.slice(i-3,i).reduce((a,b)=>a+b,0)
    e.push(a)
    }
    return n>0?e.slice(0,n):[]
  }