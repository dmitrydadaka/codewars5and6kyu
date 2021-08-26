function isIntArray(arr) {
    return Array.isArray(arr)&&arr.every(Number.isInteger)
  }
  
  function isIntArray(arr) {
    return Array.isArray(arr)?arr.every(Number.isInteger):false
  }