function solution(n){
    return Math.round(n*2)/2
  }
  
  function solution(n){
    return n%1<0.25?~~(n):n%1>=.75?Math.ceil(n):~~(n)+.5
  }