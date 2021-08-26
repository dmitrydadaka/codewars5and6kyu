function minimumNumber(numbers,sum=numbers.reduce((a,c)=>a+c,0),min=0){
    let a= Array(sum+min).fill(1).join``.match(/^(11+?)\1+$/)
    return a?minimumNumber(numbers,sum,++min):min
  }
  
  function minimumNumber(numbers,sum=numbers.reduce((a,c)=>a+c,0),min=0){
    return Array(sum+min).fill(1).join``.match(/^1?$|^(11+?)\1+$/)?minimumNumber(numbers,sum,++min):min
  }
  
  function minimumNumber(numbers){
    let number=numbers.reduce((a,c)=>a+c,0)
    for(let i=number;;i++){
      let a=[]
      for(let j=1;j<=i;j++){
        if(i%j==0) a.push(j)
        }
      if(a.length==2) return i-number
      }
  }