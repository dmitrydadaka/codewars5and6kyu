function validate(n){
    let n1=[...n+''].reverse().map((x,i)=>i%2?x*2:Number(x)).map(x=>x>9?[...x+''].reduce((a,c)=>a+ +c,0):x).reduce((a,c)=>a+c,0)
    return n1>9&&n1%10==0
  }
  
  function validate(n){
    let n1=[...n+''].reverse().map((x,i)=>i%2?x*2:x).reverse().map(x=>+x).map(x=>x>9?[...x+''].reduce((a,c)=>a+ +c,0):x).reduce((a,c)=>a+c,0)
    return n1>9&&n1%10==0
  }