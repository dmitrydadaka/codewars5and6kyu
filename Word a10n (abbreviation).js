function abbreviate(string) {
    return string.replace(/\w+/gi,x=>x.length<4?x:x[0]+(x.length-2)+x[x.length-1])
  }