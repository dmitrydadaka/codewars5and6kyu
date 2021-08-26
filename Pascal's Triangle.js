function pascalsTriangle(n) {
    let arr=[]
    for(let j=0;j<n;j++){
    let row=[]
    while(row.length<=j){
      row.unshift(1)
      for(let i=1;i<row.length-1;i++){
        row[i]+=row[i+1]
        }
    } 
    arr.push(row)
    
  }
    return [].concat(...arr)
  }
  
  function pascalsTriangle(n) {
    let arr=[]
    for(let j=0;j<n;j++){
    let row=[]
    while(row.length<=j){
      row.unshift(1)
      for(let i=1;i<row.length-1;i++){
        row[i]+=row[i+1]
        }
    } 
    arr.push(row)
    row=[]
  }
    return [].concat(...arr)
  }