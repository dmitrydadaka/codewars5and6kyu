findEvenIndex=(a,b=a=>a.reduce((a,b)=>a+b,0))=>a.findIndex((_,i)=>b(a.slice(0,i))==b(a.slice(i+1)))

function findEvenIndex(arr)
{
  return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((p,c)=>p+c,0)==a.slice(i+1).reduce((p,c)=>p+c,0));
}

function findEvenIndex(arr)
{
  for(i=0;i<arr.length;i++){
   if(arr.slice(0,i+1).reduce((a,c)=>a+c,0)==arr.slice(i).reduce((a,c)=>a+c,0)) return i
    }
  return -1
}