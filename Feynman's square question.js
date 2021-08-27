function countSquares(n){
    return [...Array(n).keys()].reduce((a,c)=>a+(c+1)**2,0)
   }
   
   function countSquares(n){
     return n*(n+1)*(2*n+1)/6
   }
   
   function countSquares(n){
    return [...Array(n)].reduce((a,c,i)=>a+(i+1)**2,0)
   }