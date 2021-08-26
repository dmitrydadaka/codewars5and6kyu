function createMessage(s) {
    return (tr)=>{
      if(!tr) return s
      return createMessage(s+' '+tr)
      }
  }
  
  function createMessage(s) {
    return (tr)=>tr?createMessage(s+' '+tr):s
  }
  
  function createMessage(...args) {
    return (s)=>s?createMessage(...args,s):args.join` `
  }
  
  function createMessage(s) {
   parts=[],f=s=>s?(parts.push(s),f):parts.join` `
   return f(s)
  }