function foldArray(array, runs)
{
  n=0
  while(n<runs){
    a=array.slice(Math.ceil(array.length/2)).reverse()
    if(a.length<Math.ceil(array.length/2))a.push(0)  
    array=array.slice(0,Math.ceil(array.length/2)).map((e,i)=>e+a[i])
    n++
    }
  return array
}