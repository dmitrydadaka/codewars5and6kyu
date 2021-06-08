function findUniq(arr) {
    return +arr.filter(x=>arr.indexOf(x)==arr.lastIndexOf(x))
  }

  function findUniq(arr) {
    return arr.find(x=>arr.indexOf(x)==arr.lastIndexOf(x))
  }
  
  function findUniq(arr) {
    return arr.filter(x=>arr.indexOf(x)==arr.lastIndexOf(x))[0]
  }