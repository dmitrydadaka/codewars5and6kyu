function perfectSquare(s) {
    if (/[^.\n]/.test(s)) return false
    s = s.split('\n')
    return s.every(row => row.length == s.length)
  }
  
  function perfectSquare(string){
    var arr = string.split(/\n/);
    return arr.every(x => new RegExp('^\\.{'+arr.length+'}$').test(x));
  }
  
  function perfectSquare(string){
  
    return string.split('\n').every((x,i,_)=>x==`.`.repeat(_.length))
    
  }
  
  function perfectSquare(string){
    let lines = string.split("\n"), len = lines.length, rex = RegExp("^\\.{"+len+"}$");
    return lines.every( line => rex.test(line) )
  }
  
  function perfectSquare(string){
  
   return !string.replace(/[.]|\n/g,'').length&&
    string.split('\n').every((x,i,_)=>x==_[0])?Math.sqrt(string.replace(/[^.]/g,'').length)%1==0:false
    
    
  }