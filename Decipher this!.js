const decipherThis = str =>
  str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2);

function decipherThis(str) {
return str.split(' ').map(x=>String.fromCharCode(parseFloat(x))+(x.replace(/\d+/,'').length==1?x.replace(/\d+/,''):x.replace(/\d+/,'').slice(-1)+x.replace(/\d+/,'').slice(1,-1)+x.replace(/\d+/,'').slice(0,1))).join` `
}; 