const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );

function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

function deleteNth(arr,n){
  let a=[]
for(i=0;i<arr.length;i++){
if(a.filter(x=>x==arr[i]).length<n)a.push(arr[i]) }
 return a 
}