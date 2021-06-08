decodeMorse = function(e){
    return e.trim().replace(/\s?[.-]+\s?/g,match=>MORSE_CODE[match.trim()])
  }
  
  decodeMorse = function(morseCode){
    function decodeMorseLetter(letter) {
      return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
  }
  
  decodeMorse = function(d){
    return d.split(/   /).map(x=>x.split(' ').map(x=>MORSE_CODE[x]).join``).join` `.trim()
  }