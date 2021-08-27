function arraysSimilar(arr1, arr2) {
    return arr1.reduce((a,c)=>a+c,0)===arr2.reduce((a,c)=>a+c,0)
  }
  
  function arraysSimilar(a1, a2) {
    return a1.sort((a,b)=>a-b).every((x,i)=>x===a2.sort((a,b)=>a-b)[i])&&a1.length==a2.length
  }