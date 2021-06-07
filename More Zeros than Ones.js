let moreZeros=s=>[...new Set(s.replace(/./g,(c,s,n)=>(s=c.charCodeAt().toString(2)).length-(n=s.replace(/0/g,'').length)>n?c:''))];

const moreZeros = s =>
  [...new Set(s)].filter(val => val.charCodeAt().toString(2).replace(/1/g, ``).length > 3);

function moreZeros(s){
 let a=s.split('').map(x=>x.charCodeAt().toString(2).replace(/[1]/g,'').length>x.charCodeAt().toString(2).replace(/[0]/g,'').length)
 return [...new Set(s.split('').filter((x,i)=>a[i]==true))]
}