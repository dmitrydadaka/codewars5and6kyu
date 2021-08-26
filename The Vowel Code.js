function encode(string) {
    arr=['y','a','e','i','o','u']
    return string.replace(/[oaieu]/gi, x=>arr.indexOf(x))
  }
  
  function decode(string) {
    return string.replace(/[12345]/g,x=>arr[x])
  }