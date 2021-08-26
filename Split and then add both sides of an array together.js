function splitAndAdd(arr, n) {
    while(n--){
   let a=arr.slice(0,~~(arr.length/2))
   let b=arr.slice(~~(arr.length/2))
   if(a.length<b.length)a.unshift(0)
      arr=a.map((e,i)=>e+b[i])
      }
     return arr
   }