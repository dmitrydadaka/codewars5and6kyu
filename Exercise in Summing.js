function minimumSum(values, n) {
    return values.sort((a,b)=>a-b).slice(0,n).reduce((a,c)=>a+c,0)// sum the n smallest integers in the array values (not necessarily ordered)
  }
  
  function maximumSum(values, n) {
    return values.sort((a,b)=>b-a).slice(0,n).reduce((a,c)=>a+c,0)// sum the n largest integers in the array values (not necessarily ordered)
  }