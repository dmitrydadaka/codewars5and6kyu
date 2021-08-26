function isTriangleNumber(number) {
    return ((8*number+1)**0.5)%1==0
  }
  
  function isTriangleNumber(number) {
    let n=0
    while(n*(n+1)/2<number){
      n++
      }
    return n*(n+1)/2==number
  }