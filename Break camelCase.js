function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }
  
  // complete the function
  function solution(string) {
     return string.replace(/([A-Z])/g, ' $1')
  }
  
  // complete the function
  function solution(string) {
     return string.replace(/[A-Z]/g, x=>' '+x)
  }