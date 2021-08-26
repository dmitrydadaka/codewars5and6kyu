const nbrOfLaps = (x, y) => {
    let cnt = 0;
    while (++cnt * x % y) ;
    return [cnt, cnt * x / y];
  };
  
  var nbrOfLaps = function(x, y) {
    var lcm = x;
    while(lcm % y != 0) {lcm += x;}
    return [lcm / x, lcm / y];
  }
  
  function gcd(a, b) {
    if(b == 0)
      return a;
    return gcd(b, a % b);
  }
  
  var nbrOfLaps = function (x, y) {
    var lcm = (x*y)/ gcd(x,y);
    return [lcm/x, lcm/y];
  }
  var nbrOfLaps = function (x, y) {
    for(let i=x;;i+=x)
      if (i%y==0) return [i/x,i/y];
  }
  
  var nbrOfLaps = function (x, y) {
    a=[]
    b=[]
    for(i=1;i<x;i++){
     if(x%i==0)a.push(i) 
    }
    for(i=1;i<y;i++){
     if(y%i==0)b.push(i) 
    }
    c=a.filter(e=>b.some(v=>e==v)).reverse()
    return x==y?[1,1]:[x*y/c[0]/x,x*y/c[0]/y]
  }