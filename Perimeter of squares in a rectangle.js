const SQRT5 = Math.sqrt(5);
const PHI = (SQRT5 + 1) / 2;
const fib = n => Math.round(PHI**n / SQRT5);
const perimeter = n => 4 * fib(n + 3) - 4;

function perimeter(n) {
  let a=[1,1]
    for(i=2;i<n+1;i++){
      a.push(a[i-1]+a[i-2])
      }
  return n==0?4:a.reduce((a,b)=>a+b,0)*4
}