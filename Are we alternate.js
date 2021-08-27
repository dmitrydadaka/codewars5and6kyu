function isAlt(word) {
    let v='aoieu'
    for(i=0;i<word.length-1;i++){
      if(v.indexOf(word[i])==-1&&v.indexOf(word[i+1])==-1)return false
      if(v.indexOf(word[i])>-1&& v.indexOf(word[i+1])>-1)return false
      }
    return true
  }
  
  function isAlt(word) {
    return /[aoeui]{2}|[^aoeui]{2}/.test(word)?false:true
  }
  
  function isAlt(str) {
  
  let vowels = ["a", "e", "o", "i", "u"];
  for(i = 0; i < str.length-1; i++) {
      if(vowels.indexOf(str[i]) >= 0 && vowels.indexOf(str[i+1])>=0)
                  return false;
      else if(vowels.indexOf(str[i]) === -1 && vowels.indexOf(str[i+1])===-1)
              return false;
     }
     return true;
  }