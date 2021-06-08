function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g)||[]).length
  }
  
  function duplicateCount(text){
    var count = text.toLowerCase().split('').reduce((accum, curr) => {
      accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
      return accum;
    }, {});
    return Object.keys(count).filter(key => count[key] > 1).length;
  }
  
  function duplicateCount(text){
    return [...new Set(text.toLowerCase().split('').filter((x,i,_)=>_.indexOf(x)!=_.lastIndexOf(x)))].length
  }

  function duplicateCount(text){
    return [...new Set([...text.toLowerCase()].sort().filter((x,i,_)=>x==_[i+1]))].length
  }