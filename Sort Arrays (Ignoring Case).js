sortme = function( names ){
    return names.sort((a,b)=>a.toLowerCase()>b.toLowerCase()?1:b.toLowerCase()>a.toLowerCase()?-1:0)
  }
  
  // input: names - unsorted strings
  // output: case-agnostic sort
  sortme = function( names ){
    return names.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))
  }