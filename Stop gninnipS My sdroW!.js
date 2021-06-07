function spinWords(string){
    return string.replace(/\w{5,}/g,x=>[...x].reverse().join``)
  }
  
  function spinWords(string){
    return string.split(' ').map(x=>x.length>=5?[...x].reverse().join``:x).join` `
  }