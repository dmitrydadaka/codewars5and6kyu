function maxSum(arr,range){
    let a=[]
    for(let i=0;i<range.length;i++){
      let b=arr.slice(range[i][0],range[i][1]+1).reduce((p,c)=>p+c,0)
        a.push(b)                                              
   }  
    return Math.max(...a)
  } 