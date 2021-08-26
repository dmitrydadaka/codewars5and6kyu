function getLengthOfMissingArray(s) {
    return (a=>a.length&&a.every(Boolean)?a.find((e,i)=>e!=a[i+1]-1)+1:0)(Array.isArray(s)&&s.map((e,i)=>e&&e.length||0).sort((a,b)=>a-b)||[])
  }

  function getLengthOfMissingArray(arr) {
  if(!Array.isArray(arr)||arr.length==0)return 0
  if(arr.some(x=>!Array.isArray(x)||x.length==0))return 0
   a=arr.sort((a,b)=>a.length-b.length).map(x=>x.length).find((x,i,arr)=>x-arr[i+1]<-1)
    return a>-1?a+1:0
  }