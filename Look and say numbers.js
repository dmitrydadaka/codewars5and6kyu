lookAndSay=(a,b,c=[])=>c.length<b?lookAndSay(a,b,[...c,(c.length?c[c.length-1]:a).match(/(\d)\1*/g).map(a=>a.length+a[0]).join`` ]):c

function lookAndSay(data,len){
return [...Array(len)].map(x=>data=data.replace(/(.)\1*/g,x=>x.length+x[0]))
}

function lookAndSay(data,len){
return Array.from(Array(len),()=>data=data.replace(/(.)\1*/g,x=>x.length+x[0]))
}

function lookAndSay(data,len){
  let a=[]
  for(i=0;i<len;i++){
    data=data.replace(/(.)\1*/g,x=>x.length+x[0])
    a.push(data)
    }
  return a
}