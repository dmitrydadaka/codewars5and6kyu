function triangleType(a, b, c){

    return ([a,b,c]=[a,b,c].sort((a,b)=>a-b),c>=a+b?0:c**2<a**2+b**2?1:c**2==a**2+b**2?2:3)
  }
  
  
  function triangleType(a, b, c){
  d=[a,b,c].sort((a,b)=>b-a)
  if(d[0]>=d[1]+d[2])return 0
  if(d[0]**2<d[1]**2+d[2]**2)return 1
  if(d[0]**2==d[1]**2+d[2]**2)return 2
  return 3
  }