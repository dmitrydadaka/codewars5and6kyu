function sumDigPow(a, b) {
    return Array.from(Array(b-a+1),(_,idx)=>idx+a).filter(e=>e==[...e+''].reduce((a,c,i)=>a+c**(i+1),0))
  }
  
  function sumDigPow(a, b) {
    arr=[]
    for(i=a;i<=b;i++){
      if(i==[...(i+'')].reduce((a,c,i)=>a+((c)**(i+1)),0))arr.push(i)
         }
    return arr
  }