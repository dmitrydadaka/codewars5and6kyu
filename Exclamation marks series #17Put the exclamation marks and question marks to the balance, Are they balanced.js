function balance(l,r){
    return (f=>f(l)>f(r)?'Left':f(r)>f(l)?'Right':'Balance')(s=>[...s].reduce((a,c)=>a+(c=='?'?3:2),0)) 
  }
  
  function balance(left,right){
    left=[...left].reduce((a,c)=>a+(c=='?'?3:2),0)
    right=[...right].reduce((a,c)=>a+(c=='?'?3:2),0)
    return right>left?'Right':left>right?'Left':'Balance'
  }