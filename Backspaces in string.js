function cleanString(s) {
    return [...s].reduce((a,c)=>c=='#'?a.slice(0,-1):a+c,'')
  };
  
  function cleanString(s){
    let theEnd=[]
    for(const i of s){
      if(i==='#'){
        theEnd.pop()
        }
      else{
        theEnd.push(i)
        }
      }
      return theEnd.join``
  }