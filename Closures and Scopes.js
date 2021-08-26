function createFunctions(n) {
    var callbacks=Array.from({length:n},(_,i)=>function() {
        return i
      })
    
    return callbacks
  }