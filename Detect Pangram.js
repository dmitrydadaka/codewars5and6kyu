function isPangram(string){
    return new Set(string.toLowerCase()
     .replace(/[^a-z]/g,'')).size==26
  }
  
  function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }
  
  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }
    
  function isPangram(string){
    return [...new Set(string.toLowerCase()
     .replace(/[^a-z]/g,''))].length==26
  }