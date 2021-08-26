function kebabize(str) {
    return str.replace(/[^a-z]/gi,'').replace(/^[A-Z]/g,e=>e.toLowerCase()).replace(/[A-Z]/g,e=>'-'+e.toLowerCase())
 }
 
 function kebabize(str) {
  let a=str.replace(/[^a-z]/gi,'').replace(/([A-Z])/g,(x,i)=>'-'+x.toLowerCase())
  return a[0]=='-'?a.slice(1):a
 }