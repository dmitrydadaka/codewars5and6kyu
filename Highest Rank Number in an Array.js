function highestRank(arr){
    var high,max=0,rec={}
    for(var x of arr){
      rec[x]=(rec[x]||0)+1
      if(rec[x]>max){
        max=rec[x]
        high=x
      }
    }
    return high
  }
  
  function highestRank(arr){
    var ranks = {}
    arr.forEach(function (v) {
      ranks[v] = (ranks[v] || 0) + 1
    })
    return Object.keys(ranks).sort(function (a, b) {
      var diff = ranks[b] - ranks[a]
      return diff == 0 ? b - a : diff
    })[0] *1   
  }

  const highestRank = arr => {
      let nums = {};
      arr.forEach(el => {
          nums[el] ? nums[el]++ : nums[el] = 1
      })   
      return +Object.keys(nums).reduce((a, b) => nums[a] > nums[b] ? a : b);
  }
  
  const highestRank = arr =>
    arr.sort((a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];
  
  function highestRank(arr){
  const a=[...new Set(arr.sort((a,b)=>b-a))]
  return a.map(x=>arr.filter(y=>y==x)).reduce((a,c)=>a.length>=c.length?a:c,[])[0]
  }