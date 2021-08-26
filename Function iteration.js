createIterator = (func, n)=>x=>[...Array(n)].reduce((a,_)=>func(a),x)

var createIterator = function (func, n) {
  return (x)=>[...Array(n)].reduce((a,_)=>func(a),x)
};

var createIterator = function (func, n) {  
  return x=>{
  let i=n
  while(i--)x=func(x)
  return x
    }
}

var createIterator = function (func, n) {
  // TODO: Write code here to return a function 
  // that executes *func*, *n* times on a supplied input
return n==1?func:x=>func(createIterator(func,n-1)(x))
  }

var createIterator = function (func, n) {
 return function(x){
  let a=Array.from(Array(n),(_,j)=>x=func(x))
   return a[a.length-1]
  }
}