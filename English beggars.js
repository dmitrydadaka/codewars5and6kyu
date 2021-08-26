function beggars(values, n){
    return values.reduce((a,c,i)=>(a[i%n]+=values[i],a),Array(n).fill(0))
  }
  
  function beggars(values, n){
    let arr=[]
    for(let j=0;j<n;j++){
      let a=[]
    for(let i=j;i<values.length;i+=n){
     a.push(values[i])
      }
    arr.push(a.reduce((pre,c)=>pre+c,0))
     
    }
    return arr
  }