const tourney = ([...array], result = [[...array]]) => {
    while (array.length > 1)
      ((rounds, popped) => 
       (array.forEach((n, i) => 
                      i && ((min, max) => (rounds.push(max), array.splice(min === n ? i : i - 1, 1))) 
                      (Math.min(n, array[i - 1]), Math.max(n, array[i - 1]))),
        
        popped && (rounds.unshift(popped), array.unshift(popped)),
        result.push(rounds)))
      (rounds = [], array.length % 2 ? array.pop() : null)
  
    return result
  }
  
  const odd = n => Boolean(n&1) ;
  const last = a => a[a.length-1] ;
  const chunksOf = n => a => a.length<n ? [] : [ a.slice(0,n), ...chunksOf(n)(a.slice(n)) ] ;
  const maximum = a => a.reduce( (v,w) => Math.max(v,w) ) ;
  
  const tourney = a =>
    a.length===1  ? [ a ] :
    odd(a.length) ? [ a, ...tourney([ last(a), ...chunksOf(2)(a).map(maximum) ]) ] :
                    [ a, ...tourney(chunksOf(2)(a).map(maximum)) ] ;
  
  const tourney = array => {
      if (array.length === 1) return [array];
  
      const newArr = array.reduce((acc, c) => (acc[acc.length - 1].length === 2 ? acc.push([c]) : acc[acc.length -1].push(c), acc) ,[[]]);
  
      if (newArr[newArr.length -1].length === 1) {
          newArr.unshift(newArr.pop());
      }
  
      return [array, ...tourney(newArr.map(pair => Math.max(...pair)))];
  }
  
  const tourney = array => {
    let finalResult = [array],
      roundResult = [...array],
      currentlyTracking = [];
  
    while (finalResult.slice(-1)[0].length > 1) {
      if (roundResult.length % 2 != 0) {
        currentlyTracking.unshift(roundResult.pop());
      }
  
      if (roundResult.length === 0) {
        finalResult.push(currentlyTracking.slice(0));
        roundResult = currentlyTracking.slice(0);
  
        currentlyTracking = [];
      
      } else {
        let doingChanges = currentlyTracking.push(
          Math.max(...roundResult.splice(0, 2))
        );
      }
    }
    return finalResult;
  };
  
  const tourney = arr => {
    
    if (arr.length === 1)
      return [ arr ];
    
    let next = arr.length % 2 ? arr.slice(-1) : [];
  
    for (let i = 0; i < arr.length - 1; i += 2)
      next.push(Math.max(arr[i], arr[i + 1]));
    
    return [ arr ].concat(tourney(next));
    
  }
  
  const tourney = array => {
    const res = [array]
    let curr = filter(Array.from(array))
    while (curr.length > 1) {
      res.push(curr)
      curr = filter(Array.from(curr))
    }
    res.push(curr)
    return res
  }
  
  function filter(arr) {
    const newArr = []
  
    if (arr.length % 2) newArr.unshift(arr.pop())
  
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] > arr[i+1]) newArr.push(arr[i])
      else newArr.push(arr[i+1])
    }
    
    return newArr;
  }
  
  const tourney = a => {
    var c=[]
    c.push(a)
    while(a.length>1){
    var b=[]
    if(a.length%2==0){
    for(let i=0;i<a.length-1;i+=2){
      if(a[i]>a[i+1]) b.push(a[i])
      else b.push(a[i+1])
    }
    c.push(b)
    a=b
  }  else {
    for(let i=0;i<a.length-2;i+=2){
      if(a[i]>a[i+1]) b.push(a[i])
      else b.push(a[i+1])
    }
    b.unshift(a[a.length-1])
    c.push(b)
    a=b
  }
    }
    return c
  }