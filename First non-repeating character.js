function firstNonRepeatingLetter(s) {
    return s[s.toLowerCase().split('').findIndex((c,i,arr)=>arr.indexOf(c)==arr.lastIndexOf(c))]||''
  }