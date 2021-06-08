function partsSums(ls) {
    let p=[0]
    for(let i in ls.reverse()){
      p.push(p[i]+ls[i])
    }
  return p.reverse()
}

function partsSums(ls) {

  let res = new Array(ls.length + 1);
  res[ls.length] = 0;
  
  for (let i = ls.length - 1; i >= 0; i--) 
    res[i] = res[i + 1] + ls[i];
  
  return res;
  
}

function partsSums(ls) {
let s=ls.reduce((a,b)=>a+b,0)
return [s,...ls.map(x=>s-=x)]
}