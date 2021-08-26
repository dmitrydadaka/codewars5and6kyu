function mineLocation(field){
    return (a=>[a,field[a].indexOf(1)])(field.findIndex(x=>x.includes(1))) 
  }
  
  function mineLocation(field){
   let arr
   field.map((x,i)=>x.findIndex((y,j)=>y==1?arr=[i,j]:y))
   return arr
  }