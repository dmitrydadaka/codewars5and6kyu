function f(n, m) {
    return ((a,b)=>m*(m-1)/2*a+b*++b/2)(n/m^0,n%m)
  }
  
  function f(n, m) {
    function sum(e){
    return e*(e+1)/2 
      }
    return sum(m-1)*(~~(n/m))+sum(n%m)
  }