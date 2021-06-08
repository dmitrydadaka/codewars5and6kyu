p=n=>`0${n}`.slice(-2),humanReadable=(s)=>(m=s/60|0,p(m/60|0)+':'+p(m%60)+':'+p(s%60))

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

function humanReadable(s) {
  return (h=~~(s/(60*60)),h>10?h:'0'+h)+ ":" +(m=~~((s/60)%60),m>10?m:'0'+m)+ ":" + (se=~~(s%60),se>10?se:'0'+se)
}

function humanReadable(s) {
  
    seconds = Math.floor(s%60),
    minutes = Math.floor((s/60) % 60),
    hours = Math.floor((s /(60 * 60)));

  hours = hours < 10? "0" + hours : hours;
  minutes = minutes < 10? "0" + minutes : minutes;
  seconds = seconds < 10? "0" + seconds : seconds;

  var a= (h=~~(s/(60*60)),h>10?h:'0'+h)+ ":" +(m=~~((s/60)%60),m>10?m:'0'+m)+ ":" + (se=~~(s%60),se>10?se:'0'+se)
return a
}