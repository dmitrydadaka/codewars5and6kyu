
let productFib =f= (prod, a=0, b=1)=> prod <= a*b ? [a, b, prod == a*b] : f(prod, b, a+b)

function productFib( prod ) // mathy way
{
  const r = ( 1 + Math.sqrt(5) ) / 2;
  let fib1 = Math.round( Math.sqrt( prod / r ) ),
  fib2 = Math.round( fib1 * r );
  if ( fib1 * fib2 === prod ) return [ fib1, fib2, true ];
  for ( [fib1, fib2] = [0, 1]; fib1 * fib2 < prod; [fib1, fib2] = [fib2, fib1 + fib2] );
  return [ fib1, fib2, false ];
}

// x = fib(m-1), y = fib(m), n = prod;
// r = ( 1 + Math.sqrt(5) ) / 2; // r = golden ratio
// r = 1 + 1 / r, x * r = y; // properties of golden ratio and fib
// fib(m) * fib(m+1) = n;
// y * ( x + y ) = n;
// y * x + y**2 = n;
// y * y / r + y**2 = n;
// y**2 / r + y**2 = n;
// y**2 * ( 1 + 1 / r ) = n;
// y**2 * r = n;
// y**2 = n / r;
// y = Math.sqrt( n / r );

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

function productFib(prod){
  let a=[0,1]
  for(i=2;i<~~(Math.sqrt(prod));i++){
    a.push(a[i-1]+a[i-2])
    }
  const b=a.find((x,i)=>x*a[i+1]==prod)
  const c=a.find((x,i)=>x*a[i+1]>prod)
  return b?[b,a[a.indexOf(b)+1],true]:[c,a[a.indexOf(c)+1],false]
}