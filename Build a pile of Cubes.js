function findNb(m) {
    let n=0
    while(m>0){
      m-=++n**3
    }
      return m?-1:n  
       
    }
    
    function findNb(m) {
        for(let n=0;;n++){
          if(m>0){
            let cubN=Math.pow(n+1,3)
            m=m-cubN
          }else if(m==0){
            return n
          }else{
             return (-1);
          }
        }
       
    }