function pascal(depth) {
    let arr=[]
    for(let i=0;i<depth;i++){
      let row=[]
      while(row.length<=i){
        row.unshift(1)
       for(let j=1;j<row.length-1;j++){
        row[j]+=row[j+1]
       }
      }
      arr.push(row)
      }
    return arr
  }
  
  function pascal(depth) {
    let arr=[]
    for(let i=1;i<=depth;++i){
      let row=[]
       for(let j=0;j<i;++j){
        row.push(j==0||j==i-1?1:arr[i-2][j]+arr[i-2][j-1])
      }
      arr.push(row)
      }   
    return arr
  }
  
  function pascal(depth) {
    let arr=[]
    for(let i=0;i<depth;i++){
      let row=[]
      while(row.length<=i){
        row.unshift(1)
       for(let j=1;j<row.length-1;j++){
        row[j]+=row[j+1]
       }
      }
      arr.push(row)
      row=[]
      }
    return arr
  }