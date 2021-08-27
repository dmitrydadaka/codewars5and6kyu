numberOfPairs=a=>[...new Set(a)].map(b=>a.join``.split(b).length-1).reduce((a,b)=>a+(b>>1),0)

function numberOfPairs(gloves)
{
  return [...new Set(gloves)].reduce((a,c)=>a+(~~(gloves.filter(x=>x==c).length/2)),0)
}


 const numberOfPairs=gloves=>(gloves.sort().join().match(/(\w+),\1/g)||[]).length

function numberOfPairs(gloves)
{
  gloves = gloves.sort();
  let count = 0;
  for (var i = 0; i < gloves.length; i++) {
    if (gloves[i] === gloves[i + 1]) {
      count++
      i++
    }
  }
  return count;
}

function numberOfPairs(gloves)
{
  return Object.values(gloves.reduce((a,c)=>(a[c]=(a[c]||0)+1,a),{})).reduce((a,c)=>a+(~~(c/2)),0)
}