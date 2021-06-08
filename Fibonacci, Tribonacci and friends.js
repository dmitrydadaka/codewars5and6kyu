const Xbonacci = (signature, n, l = signature.length) =>
  signature.length < n ? Xbonacci([...signature, signature.slice(signature.length - l).reduce((pre, val) => pre + val)], n, l) : signature.slice(0, n);

function Xbonacci(s, n){
  var len = s.length, i = len-1
  while (i++ < n) {
    s[i]=s.slice(i - len).reduce((a,b)=>a+b, 0)
  }
  return s.slice(0, n);
}

function Xbonacci(s,n){
 for(i=0;i<=n;i++){
    s.push(s.slice(i)
           .reduce((a,c)=>a+c,0))
      }
  return s.slice(0,n)
}