function lookSay(n) {
    return ('' + n).replace(/((\d)\2*)/g, function(m) {return m.length + m[0];});
  }
  
  function getLines(line) {
    if(isNaN(line) || line < 1) {return -1;}
    var out = [1];
    for(var i = 1; i < line; i++) out.push(lookSay(out[i - 1]));
    return out.join(',');
  }

  const getLines = (line, tmp = '1') => line&&line>0?['1', ...Array(line-1).fill(1).map(_ => tmp =  tmp.replace(/((\d)\2*)/g, (m,$1,$2) => $1.length + $2) )].join`,`:-1
  
  function getLines(line){
    let a='1'
    let b=['1']
    for(i=1;i<line;i++){
      a=a.replace(/(.)\1*/g,x=>x.length+x[0])
      b.push(a)
     } 
    return line>0?b.join`,`:-1
  }