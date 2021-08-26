const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});
function count (string) {  
   return [...string].reduce((a,c,i,arr)=>{a[c]=a[c]+1||1 
                                           return a},{})
}