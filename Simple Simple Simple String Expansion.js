function stringExpansion(s) {
    return s.replace(/\d\D*/g,m=>m.slice(1).replace(/./g,n=>n.repeat(m[0])))
  }
  
  function stringExpansion(s) {
    return s.replace(/\d[a-z]+/ig,($2)=>[...($2.replace(/\d/g,''))].map(y=>y.repeat(parseInt($2)>9?parseInt($2)%10:parseInt($2))).join``).replace(/\d+/g,'')
  }