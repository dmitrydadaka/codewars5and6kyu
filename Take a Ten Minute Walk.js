function isValidWalk(w) {
    return (f=>w.length==10&&f('n')==f('s')&&f('e')==f('w'))(x=>w.filter(y=>y==x).length)
  }
  
  function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
  }
  
  function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
  }
  
  function isValidWalk(walk) {
    count=s=>walk.filter(x=>x==s).length;
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }
  
  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }
  
  function isValidWalk(walk) {
    return walk.length==10&&walk.filter(x=>x=='n').length==walk.filter(x=>x=='s').length&&walk.filter(x=>x=='w').length==walk.filter(x=>x=='e').length
  }