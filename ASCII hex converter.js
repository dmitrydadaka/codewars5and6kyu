
var Converter = {
    toAscii: function (hex) {
      return hex.replace(/../g,x=>String.fromCharCode(parseInt((x),16)))
    },
    toHex: function (ascii) {
      return ascii.replace(/./g,x=>x.charCodeAt().toString(16))
    }
  }
  
  
  var Converter = {
    toAscii: function (hex) {
      return [...hex].map((x,i,arr)=>i%2==0?String.fromCharCode(parseInt((x+arr[i+1]),16)):'').join``
    },
    toHex: function (ascii) {
      return [...ascii].map(x=>x.charCodeAt().toString(16)).join``
    }
  }