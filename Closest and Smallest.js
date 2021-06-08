function  closest(s) {
    if(s=='')return []
      var a=s.split(' ').map(x=>x.split('').reduce((a,b)=>a+ +b,0))
      var b=a.sort((a,b)=>a-b)
      var c=Math.min(...b.map((x,i)=>Math.abs(x-b[i+1])).length%2==0?b.map((x,i)=>Math.abs(x-b[i+1])):
                     b.map((x,i)=>Math.abs(x-b[i+1])).slice(0,-1))
      var d=b.map((x,i)=>Math.abs(x-b[i+1])).findIndex(x=>x==c)
      var e=s.split(' ').map(x=>x.split('').reduce((a,b)=>a+ +b,0)).indexOf(b[d])
      var f=s.split(' ').map(x=>x*1)
      var g= b[d]==b[d+1]?
      s.split(' ').map(x=>x.split('').reduce((a,b)=>a+ +b,0)).slice(e+1).indexOf(b[d])+(e+1)
      :s.split(' ').map(x=>x.split('').reduce((a,b)=>a+ +b,0)).indexOf(b[d+1])
  
  
      return [[b[d],e,f[e]],[b[d+1],g,f[g]]]
  }