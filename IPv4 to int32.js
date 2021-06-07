function ipToInt32(ip){
    var array8 = new Uint8Array(ip.split('.').reverse().map(Number))
    var array32 = new Uint32Array(array8.buffer);
    return array32[0];
  }
  
  function ipToInt32(ip){
    return ip.split('.').reduce((a,c)=>a*256+ +c,0)
  }
  
  function ipToInt32(ip){
    return parseInt(ip.split('.').map(x=>(Number(x).toString(2)).padStart(8,'0')).join``,2)
  }