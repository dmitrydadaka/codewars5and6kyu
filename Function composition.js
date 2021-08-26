function compose() {
    return (a)=> [...arguments].reduceRight((a,c)=>c(a),a)
  }
  
  function compose(...args) {
    return (x)=>{
    for(let i=args.length-1;i>-1;i--){
      x=args[i](x)
      }
      return x
      }
  }