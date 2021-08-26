function meeting(x, n){
    x=x.map(x=>Math.max(x[1]-x[0].length,0));
    x=x.map(x=>(n-=x,n>0?x:n==0?x:Math.max(0,n+x)))
    while (x[x.length-1]===0) x.pop();
    return n>0?'Not enough!':x.length?x:'Game On';
  }
  
  const meeting=(x, n, res=[])=>n==0 ? (!res.length ? "Game On" : res) : x.length==0 ? "Not enough!" : (e=>meeting(x.slice(1), n-e, res.concat(e)))(Math.min(n,x[0][1]>=x[0][0].length ? x[0][1]-x[0][0].length : 0));
  
  const meeting = (x, need) => {
    if (need == 0) return 'Game On';
    let spare_chairs = x.reduce((unused, [occupants, chairs]) => {
      let available = Math.max(chairs - occupants.length, 0);
      if (need > 0) {
        unused.push(Math.min(need, available));
      }
      need -= available;
      return unused;
    }, []);
    return need > 0 ? 'Not enough!' : spare_chairs;
  };
  
  function meeting(rooms, need, theEnd=[]){
  if(need==0)return 'Game On'
  for(const [x,y] of rooms){
  const toTake=Math.min(Math.max(y-x.length,0),need)
  theEnd.push(toTake)
  need-=toTake
    if(0>=need)return theEnd
  }
    return 'Not enough!'
  }
  
  function meeting(x, need){
  if(need==0)return 'Game On'
  let count=0
  let arr=[]
  for(i=0;i<x.length;i++){
  a=x[i][1]-x[i][0].length
  count+=a<0?0:a
  count<=need?arr.push(a<0?0:a):arr.push(a-(count-need))
    if(count>=need)return arr
  }
    return 'Not enough!'
  }