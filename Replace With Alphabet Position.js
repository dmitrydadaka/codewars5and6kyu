function alphabetPosition(text) {
    const result = [];
    text.toLowerCase().split('').forEach(function(char){
      const number = getTheCharCode(char)
      if(number > 0){
        result.push(number);
      }
    })
    
    return result.join(' ')
    
  }
  
  function getTheCharCode(char) {
    const charCode = char.charCodeAt(0)
    if(charCode >= 97 && charCode <= 122){
      return charCode -96
    }
    return 0
  }
  
  function alphabetPosition(text) {
    return text.toLowerCase()
      .split('')
      .filter(c => c.charCodeAt(0) < 123 && c.charCodeAt(0) > 96)
      .map(c => c.charCodeAt(0) - 96)
      .join(' ');
  }
  
  function alphabetPosition(text) {
    return [...text.toLowerCase().replace(/[^a-z]/g,'')].map((x,i)=>x.charCodeAt()-96).join` `
  }