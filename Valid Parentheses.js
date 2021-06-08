function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }
  
  function validParentheses(p){
   //p[0]=='('&&p[p.length-1]==')'&&p.split('(').length==p.split(')').length
  while (/\(\)/.test(p))  p=p.replace(/\(\)/g, "");
      return !p
    
  }