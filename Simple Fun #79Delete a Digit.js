deleteDigit=x=>Math.max(...[...String(x)].map((_,idx)=>String(x).slice(0,idx)+String(x).slice(idx+1)))

function deleteDigit(n) {
  const numb=String(n)
  return Math.max(...Array.from(numb,(_,idx)=>numb.slice(0,idx)+numb.slice(idx+1)))
  
  
}

function deleteDigit(n) {
const a=(n+'').split('').map(x=>+x)
for(let i=0;i<a.length;i++){
  if(a[i]>a[i-1]) return a.slice(0,i-1).concat(a.slice(i)).join``*1
  }
  return a.slice(0,-1).join``*1
}