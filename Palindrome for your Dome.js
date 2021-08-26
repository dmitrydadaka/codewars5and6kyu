function palindrome(string) {
    string=string.toLowerCase().replace(/[^a-z]/gi,'')
    return [...string.slice(0,Math.ceil(string.length/2))].every(x=>string.slice(~~(string.length/2)).includes(x))
  }