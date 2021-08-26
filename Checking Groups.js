function groupCheck(s,r=/\(\)|\{\}|\[\]/){
    return r.test(s)?groupCheck(s.replace(r,'')):!s
  }
 
  function groupCheck(s){
    let prev=''
    while(prev!=s){
      prev=s
      s=s.replace(/\(\)|\{\}|\[\]/g,'')
    }
    return !prev.length
  }