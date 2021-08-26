function stringTransformer(str) {
    return str.split(' ').reverse().join` `.replace(/\w/ig,x=>x.toLowerCase()==x?x.toUpperCase():x.toLowerCase())
  }
  
  function stringTransformer(str) {
    return str.split(' ').map(x=>[...x].map(x=>x.toLowerCase()==x?x.toUpperCase():x.toLowerCase()).join``).reverse().join` `
  }
  