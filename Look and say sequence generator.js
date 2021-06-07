function lookAndSaySequence(s, n) {
    return n === 1 ? s : lookAndSaySequence(s.replace(/(\d)\1*/g, (m, n) => m.length + n), n - 1);
  }
  
  
  function lookAndSaySequence(firstElement, n){
    for(var i=1; i<n; i++){
      firstElement = firstElement.replace(/(.)\1*/g, (m, g) => m.length + g);
    }
    return firstElement;
  }
  
  const lookAndSaySequence = (text, count) => count <= 1 ? text : lookAndSaySequence(text.match(/(.)\1*/g).map(frag => `${frag.length}${frag[0]}`).join(''), count - 1);
  