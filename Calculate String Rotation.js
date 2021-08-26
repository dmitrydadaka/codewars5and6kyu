function shiftedDiff(f,s){
    return f.length==s.length?(s+s).indexOf(f):-1
  }
  
function shiftedDiff(first,second){
    if(first==second)return 0
    for(i=0;i<second.length;i++){
      second=second.slice(1)+second[0]
      if(first==second) return i+1
     }
    return -1
}