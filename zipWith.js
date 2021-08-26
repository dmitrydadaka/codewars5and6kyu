function zipWith(fn,a0,a1) {
    return [...Array(Math.min(a0.length,a1.length))].map((x,i)=>fn(a0[i],a1[i]))
  }
  
  function zipWith(fn,a0,a1) {
    return [...Array(Math.min(a0.length,a1.length))].map((x,i)=>fn(a0[i],a1[i])).slice(0,Math.min(a0.length,a1.length))
  }