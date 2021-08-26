function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }
  
  function validBraces(braces){
    prev=''
    while(prev.length!=braces.length){
      prev=braces
      braces=braces.replace(/\(\)|\[\]|{\}/g,'')
    }
    return prev.length==0
  }
  
  function validBraces(braces){
    for (var i = 0, depth = []; i < braces.length; i++) {
      switch (braces[i]) {
        case '(': case '[': case '{': depth.push(braces[i]); break;
        case ')': if (depth.pop() != '(') return false; break;
        case ']': if (depth.pop() != '[') return false; break;
        case '}': if (depth.pop() != '{') return false; break;
      }
    }
    return depth.length == 0;
  }

  function validBraces(braces){
    while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
      braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    return braces.length == 0;
  }
  
  function validBraces(braces){
   while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
   return !braces.length;
  }