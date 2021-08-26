function chained(funs) {
    return (x)=>{
     for(i=0;i<funs.length;i++){
     x=funs[i](x) }
      return x
 }
    }
 
 function chained(f) {
   return (x)=>{
     return f.reduce((a,c)=>c(a),x)}
 }
 
 function chained(f) {
   return (x)=>{
     return f.reduce((a,c,i)=>i==0?a=c(x):a=c(a),0)}
 }
 
 function chained(funs) {
    return (x)=>{
     arr=[funs[0](x)]
     for(i=1;i<funs.length;i++){
     arr.push(funs[i](arr.pop()))  }
      return arr.pop()
 }
    }