function numPrimorial(n){
    let a=[]
    let i=2
      while(a.length<n){  
      let b=[]
        for(let j=i;j>0;j--){   
          if(i%j==0)b.push(j)
          }
          if(b.length==2)a.push(i)
          b=[]  
          i++
        }
      return a.reduce((a,c)=>a*c,1)
    }