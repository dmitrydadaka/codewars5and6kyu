function queueTime(customers, n) {
    var arr = new Array(n).fill(0);
  
    for (var i = 0; i < customers.length; i++) {
      var idx = arr.indexOf(Math.min(...arr));
      arr[idx] =arr[idx]+ customers[i];
    }
  
    return Math.max(...arr);
  }
  
  function queueTime(customers, n) {
    var arr = new Array(n).fill(0);
  
    for (var i = 0; i < customers.length; i++) {
      var idx = arr.indexOf(Math.min(...arr));
      arr[idx] += customers[i];
    }
  
    return Math.max(...arr);
  }