function matrixAddition(a, b){
    var c = [];
  
    for (var i = 0; i < a.length; i++) {
      c[i] = (typeof a[i] !== 'number') ? matrixAddition(a[i], b[i]) : a[i] + b[i];
    }
    
    return c;
  }
  
  function matrixAddition(a, b){
    return a.map((v,i)=>v.map((x,z)=>x+b[i][z]))
  }

  function matrixAddition(a, b){
   return a.map((val,i,arr)=>val.map((x,j,_)=>x+b[i][j]))
  }