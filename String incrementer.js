function incrementString (strng) {
    return strng.replace(/[0-9]*$/,e=>String(+e+1).padStart(e.length,'0'))
  }
  
  function incrementString (s) {
    return s.replace(/[0-8]?9*$/,x=>String(++x))
  }
  
  function incrementString (strng) {
    a=strng.replace(/[0-9]/g,'')
    b=strng.replace(/[^0-9]/g,'').split('').findIndex(x=>+x!=0)
    c=a+(strng.slice(b+a.length)*1+1)
    if(a==strng)return strng+1
    if(b==-1)return strng.slice(0,-1)+1
    d=strng.length-c.length
    while(d>0){
      a=a+'0'
      d--
      }
   return a+(strng.slice(b+strng.replace(/[0-9]/g,'').length)*1+1)
  }