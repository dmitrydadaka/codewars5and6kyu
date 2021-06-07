var encryptThis = function(text) {
    return text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g,(a,b,c,d)=>a.charCodeAt()+d+c+b)
  }
  
  var encryptThis = function(text) {
    return text.split(' ').map(x=>x.length==1?x.charCodeAt():x.length==2?(x.slice(0,1)).charCodeAt()+x.slice(-1):(x.slice(0,1)).charCodeAt()+x.slice(-1)+x.slice(2,-1)+x.slice(1,2)).join(' ')
  }