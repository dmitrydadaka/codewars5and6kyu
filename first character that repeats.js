function firstDup (s) {
    return s[s.search(/(.).*\1/ )]
  }
  
  function firstDup (s) {
    return [...s].find((c,i,arr)=>arr.indexOf(c)!=arr.lastIndexOf(c))
  }