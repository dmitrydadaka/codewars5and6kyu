multiplicationTable = function(size) {
    return Array(size).fill()
      .map( (value,index) => { return Array(size).fill()
          .map( (value2,index2)=> {
              return ( index2 + 1 ) *  ( index + 1 );
          })        
      })
  }
  
  multiplicationTable = function(s) {
    let b=Array(s).fill(0).map((x,i)=>Array(s).fill(1).map(x=>x+i))
    for(i=0;i<b.length;i++){
      b[i]=b[i].map((x,i)=>x+x*i)
    }
    
    return b
  }