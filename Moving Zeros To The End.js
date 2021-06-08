var moveZeros = function (arr) {
    return arr.reduceRight(function(prev, curr) {
      if (curr !== 0) {
        prev.unshift(curr);
      }
      else {
        prev.push(curr);
      }
      return prev;
    }, []);
  }
  
  var moveZeros = function (arr) {
    return arr.filter(x=>x!==0)
      .concat(arr.filter(x=>x===0))
  }