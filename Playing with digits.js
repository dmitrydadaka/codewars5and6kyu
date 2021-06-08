digPow=(n, p)=>(j=>j%1?-1:j)([...(n+'')].reduce((a,c,i)=>a+c**(i+p),0)/n)

digPow=(n, p,v)=>(v=[...(n+'')].reduce((a,c,i)=>a+c**(i+p),0)/n,Number.isInteger(v)?v:-1)

function digPow(n, p){
  return [...(n+'')].reduce((a,c,i)=>a+c**(i+p),0)/n%1==0?
    [...(n+'')].reduce((a,c,i)=>a+c**(i+p),0)/n:-1
}