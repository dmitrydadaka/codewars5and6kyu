function solution(str){
    arr = [];
    for(var i = 0; i < str.length; i += 2){
      second = str[i+1] || '_';
      arr.push(str[i] + second);
    }
    return arr;
  }
     
  
  function solution(l){
   return  (l+'_').match(/.{2}/g)||[]
  }
  
  function solution(str){
    str=str.length%2?str+'_':str
    return Array.from({length:str.length/2},(_,i)=>str.slice(i*2,i*2+2))
  }