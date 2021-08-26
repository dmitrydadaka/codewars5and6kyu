function dup(s) {
    return s.map(c=>c.replace(/(.)\1+/g,'$1'))
  };
  
  function dup(s) {
  return s.map(c=>[...c].filter((v,i,arr)=>v!=arr[i+1]).join``)
  };