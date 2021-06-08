function createPhoneNumber(numbers){
    return numbers.join``.replace(/(...)(...)(.+)/,'($1) $2-$3')
  }
  
  function createPhoneNumber(n){
    return `(${n.slice(0,3).join``}) ${n.slice(3,6).join``}-${n.slice(-4).join``}`
  }