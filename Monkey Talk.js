function monkeyTalk(phrase){
    let mappedArray = phrase.split(' ').map(word => 'aeiou'.includes(word.toLowerCase().charAt(0)) ? 'eek' : 'ook');
    return mappedArray[0].charAt(0).toUpperCase() + mappedArray.join(' ').slice(1) + '.';
  }