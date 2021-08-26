function reverse(str){
    return str.trim().split(' ').map((x,i)=>i%2?[...x].reverse().join``:x).join` `
  }
  
  function reverse(str){
    str=str.split(' ').map((x,i)=>i%2?[...x].reverse().join``:x).join` `
    return [...str].every(x=>x==' ')?'': str
  }