function rgb(...a){
    return a.map(x=>('0'+Math.max(0,Math.min(x,255)).toString(16)).slice(-2))
      .join``.replace(/[a-z]/g,x=>x.toUpperCase())
 }
 
 function rgb(...a){
    return a.map(x=>x<0?0:x>255?255:x).map(x=>x.toString(16).length<2?'0'+ x.toString(16):x.toString(16))
      .join``.replace(/[a-z]/g,x=>x.toUpperCase())
 }