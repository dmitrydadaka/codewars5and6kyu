function separateLiquids(g, v={O:1,A:2,W:3,H:4}) {
    return g.length?[].concat(...g).sort((a,b)=>v[a]-v[b]).join``.match(RegExp(`.{${g[0].length}}`,'g')).map(c=>[...c]):[]
    }
    
    function separateLiquids(k) {
    let a=[],b=[],c=[],d=[],e=[]
    k.map(x=>x.map(x=>x=='O'?a.push(x):x=='A'?b.push(x):x=='W'?c.push(x):x=='H'?d.push(x):''))
    let g=a.concat(b,c,d)
     for(let i=0;i<g.length;i+=k[0].length){
       let f=g.slice(i,i+k[0].length)
       e.push(f)
       }
      return e
    }
    
    separateLiquids=(a,b={O:1,A:2,W:3,H:4})=>a.length?[].concat(...a).sort((x,y)=>b[x]-b[y]).join``.match(new RegExp(`.{${a[0].length}}`,'g')).map(a=>[...a]):[];
    
    function separateLiquids(k) {
    let a=[]
    let b=[]
    let c=[]
    let d=[]
    let e=[]
    k.map(x=>x.map(x=>x=='O'?a.push(x):x=='A'?b.push(x):x=='W'?c.push(x):x=='H'?d.push(x):''))
    let g=a.concat(b,c,d)
    if(k.length<1)return []
    if(k.length<2)return [a.concat(b,c,d)]
     for(let i=0;i<g.length;i+=k[0].length){
       let f=g.slice(i,i+k[0].length)
       e.push(f)
       }
      return e
    }