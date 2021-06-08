const fibonacci = n => { return n <= 0 ? [] : [...Array(n)].reduce((a,_,i) => { a.push(a[i] + a[i+1]); return a; }, [0,1]).slice(0, n) }

function fibonacci(n) {
  let a=[0,1]
  for(let i=2;i<n;i++){
    var k=a[a.length-1]+a[a.length-2]
    a.push(k)
}
  return n<=0?[]:a
}