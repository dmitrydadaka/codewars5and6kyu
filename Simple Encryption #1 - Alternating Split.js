function encrypt(text, n) {
    if(text==null)return null
  for(let i=0;i<n;i++){
    text=[...text].filter((x,i)=>i%2).concat([...text].filter((x,i)=>i%2==0)).join``
    }
    return text
  }
  
  function decrypt(e, n) {
  for(let i=0;i<n;i++){
    let f=e.slice(0,e.length>>1)
    let s=e.slice(e.length>>1)
    e=[...Array(e.length)].map((x,i)=>i%2==0?s[i/2]:f[~~(i/2)]).join``
    }
    return e
  }
  
  encrypt=(a,b,c=b=>[...a].filter((_,a)=>a%2==b).join``)=>a&&b>0?encrypt(c(1)+c(0),--b):a;
  decrypt=(a,b)=>a&&b>0?decrypt([...Array(a.length)].map((_,b)=>b%2?a[b>>1]:a[(a.length>>1)+b/2]).join``,--b):a;
  
  function encrypt(text, n=0) {
    return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
  }
  
  function decrypt(text, n) {
    return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
  }
  
  function encrypt(text, n) {
    for (let i = 0; i < n; i++) {
      text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
    }
    return text
  }
  
  function decrypt(text, n) {
    let l = text && text.length / 2 | 0
    for (let i = 0; i < n; i++) {
      text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
    }
    return text
  }
  
  function encrypt(text, n) {
    if(text==null)return null
  for(let i=0;i<n;i++){
    text=[...text].filter((x,i)=>i%2).concat([...text].filter((x,i)=>i%2==0)).join``
    }
    return text
  }
  
  function decrypt(e, n) {
  for(let i=0;i<n;i++){
    let f=e.slice(0,~~(e.length/2))
    let s=e.slice(~~(e.length/2))
    e=[...Array(e.length)].map((x,i)=>i%2==0?s[i/2]:f[~~(i/2)]).join``
    }
    return e
  }