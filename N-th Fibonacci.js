function nthFibo(n) {
    return Math.round((1/Math.sqrt(5))*Math.pow((1+Math.sqrt(5))/2,n-1))
  } 
  
  const nthFibo = n =>
    Math.round(((1 + 5 ** .5) / 2) ** --n / 5 ** .5)
  
  
  function nthFibo(n) {
    return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
  }
  
  function nthFibo(n) {
    let [p,c]=[0,1]
    for(let i=1;i<n;i++){ [p,c]=[c,p+c]}
    return p
  }
  
  function nthFibo(n) {
    a=[0,1]
    if(n<3)return a[n-1]
   for(let i=2;i<n;i++){
     b=a[i-1]+a[i-2]
     a.push(b)
     }
    return a?a[a.length-1]:0
  }