function toWeirdCase(string){
    return string.replace(/\w{1,2}/g,x=>x[0].toUpperCase()+x.slice(1))
  }
  
  function toWeirdCase(string){
    return string.replace(/\w+/g,x=>[...x].map((y,i)=>i%2==0?y.toUpperCase():y).join``)
  }