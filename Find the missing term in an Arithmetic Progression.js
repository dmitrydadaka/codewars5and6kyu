var findMissing = function (list) {  
    var listLen = list.length;
    var iter = (list[listLen-1]-list[0])/listLen;
    
    for(i = 0; i < listLen; i++){
      var next = list[i] + iter
      if(next != list[i+1]){
        return next;
      }
    }
  }
  
  var findMissing = function (l) {  
    return ((l[0]+l[l.length-1])*(l.length+1))/2-(l.reduce((a,b)=>a+b))
  }
  
  var findMissing = function (a) {  
  let s=(a[a.length-1]-a[0])/a.length
  return a.find((x,i)=>a[i+1]-x!=s)+s
  }