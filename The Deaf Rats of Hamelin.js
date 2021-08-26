var countDeafRats = function(town) {
    if(!town) return 0
    town=town.replace(/ /g,'').split('p')
    let t0=0
    let t1=town[0]+(town[1]?[...town[1]].reverse().join``:'')
   for(let i=0;i<t1.length;i+=2){
      if(t1[i]=='O')t0++
      }
   
    return t0
  }
  
  var countDeafRats = function(town) {
    // Your code here
    return [...town.replace(/ +/g,'')].reduce((a,c,i)=>a+(i%2==0&&c=='O'),0)
  }
  
  var countDeafRats = function(town) {
    if(!town) return 0
    town=town.replace(/ /g,'').split('p')
    let t0=0
    let t1=0
   if(town[0]){ for(let i=0;i<town[0].length;i+=2){
      if(town[0][i]=='O')t0++
      }}
   if(town[1]){ for(let i=0;i<town[1].length;i+=2){
      if(town[1][i]=='~')t1++
      }}
    return t0+t1
  }