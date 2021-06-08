function list(names) {
    return names.map(o => o.name).join(', ').replace(/(.+), (.+)$/, '$1 & $2');
  }
  
  function list(names) {
    return names.map(o => o.name).join(', ').replace(/(.*)(, )(.*)$/, '$1 & $3');
  }
  
  function list(names){
    return !names.length?'':names.length==1?Object.values(names[0])[0]:names.slice(0,-1).map(x=>Object.values(x)).join`, `+' & '+Object.values(names[names.length-1])
  }