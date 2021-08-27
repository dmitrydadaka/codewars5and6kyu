function searchNames( logins ){
    return logins.filter((x,i,arr)=>/^\.|\.$/g.test(logins[i-1]))
  }
  
  function searchNames( logins ){
    return logins.filter((x,i)=>{
      if(i!=0&&(logins[i-1][0]=='.'||logins[i-1][logins[i-1].length-1]=='.'))return x})
  }