function lowestProduct(input,a=input.length) { 
    return a<4?'Number is too small':Math.min(...[...Array(a-3)].map((x,i)=>input.slice(i,i+4).split('').reduce((a,c)=>a*c,1)))
    }
    
    function lowestProduct(input) {
      let arr=[]
    for(let i=0;i<input.length-3;i++){
      arr.push([...input.slice(i,i+4)].reduce((a,c)=>a*c,1))
      }
      return arr.length?Math.min(...arr):'Number is too small'
    }