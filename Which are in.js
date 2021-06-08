function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
  }
  function inArray(a1,a2){
    return a1.filter(x=>a2.some(y=>y.includes(x))).sort()
  }