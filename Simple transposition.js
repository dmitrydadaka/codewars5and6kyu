function simpleTransposition(text,f=x=>[...text].filter((c,i)=>i%2-x).join``) {
    return f(1)+f(0)
  }
  
  function simpleTransposition(text) {
    return (f=>f(1)+f(0))(val=>[...text].filter((e,i)=>i%2-val).join``)
  }
  
  function simpleTransposition(text) {
    return [...text].reduce((a,c,i)=>(a[i%2]+=c,a),['','']).join``
  }
  
  function simpleTransposition(text) {
   let d=''
   let b=''
  a=[...text].forEach((c,i)=>i%2==0?b+=c:d+=c)
   return b+d
  }
  
  function simpleTransposition(text) {
    let row1=[]
    let row2=[]
    for(let i=0;i<text.length;i++){
      if(i%2==0) row1.push(text[i])
      else row2.push(text[i])
    }  
    return row1.join``+row2.join``
  }