const letterCount = s =>
  [...s].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

function letterCount(s){
return [...s].reduce((a,c)=>(a[c]=(a[c]||0)+1, a),{})
}

function letterCount(s){
  let a={}
  s.split('').forEach(c=>a[c]?a[c]++:a[c]=1)
  return a                
}

function letterCount(s){
  let res = {}
  s.split('').sort((a, b) => a - b).forEach(el => res[el] ? res[el]++ : res[el] = 1)
  
  return res;
}

function letterCount(s){
return [...s].reduce((a,c)=>{a[c]=a[c]?a[c]+1:1
                            return a},{})
}

function letterCount(s){
return [...new Set(s)].sort().reduce((a,c,i)=>{return {...a,[c]:[...s].filter(x=>x==c).length}},{})
}