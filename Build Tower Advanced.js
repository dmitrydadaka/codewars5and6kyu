function towerBuilder(n, [x,y]) {
    return [...Array(n)].reduce((a,b,i)=>a.concat(Array(y).fill(" ".repeat((n-i-1)*x)+"*".repeat((i*2+1)*x)+" ".repeat((n-i-1)*x))),[])
  }
  
  function towerBuilder(n, [x,y]) {
    return [].concat(...Array.from(Array(n),(_,i)=>' '.repeat((n-i-1)*x)+'*'.repeat((i*2+1)*x)+' '.repeat((n-i-1)*x)).map(x=>[...Array(y)].fill(x)))
  }