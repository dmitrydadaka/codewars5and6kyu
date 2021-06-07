function lookSay(number){
    return +(number+'').replace(/(.)\1*/g,x=>x.length+x[0])
  }