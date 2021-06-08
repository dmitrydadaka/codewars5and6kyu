function duplicateEncode(w){
    var word=w.toLowerCase()
    var result=''
    for(i=0;i<word.length;i++){
      if(word.lastIndexOf(word[i])===word.indexOf(word[i]))
        result+='('
      else result+=')'
    }
    return result
  }