const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

function rot13(message){
  a='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  b='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.toUpperCase()
  return message.replace(/[a-z]/gi, x=>x==x.toLowerCase()?a[a.indexOf(x)+13]:b[b.indexOf(x)+13])
}