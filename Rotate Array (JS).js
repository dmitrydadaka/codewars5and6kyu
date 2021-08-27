function rotate(array,n){
    n=n%array.length
    return array.slice(-n).concat(array.slice(0,-n))
  }
  
  function rotate(array,n){
    return Math.abs(n)==array.length||Math.abs(n)%array.length==0?array:n>0?array.slice(n>array.length?-(n%array.length):-n).concat(array.slice(0,array.length-(n>array.length?n%array.length:n))):
           array.slice(-(array.length+(n>array.length?n%array.length:n))).concat(array.slice(0,Math.abs(n)>array.length?Math.abs(n)%array.length:Math.abs(n)))
  }