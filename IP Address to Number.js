function ipToNum(ip) {
    return parseInt(ip.split('.').map(x=>(Number(x).toString(2)).padStart(8,'0')).join``,2)
    }
    
    function numToIp(num) {
      return num.toString(2).padStart(32,'0').replace(/.{8}/g,x=>parseInt(x,2)+'.').slice(0,-1)
    }
    
    function ipToNum(ip) {
    return parseInt(ip.split('.').map(x=>(Number(x).toString(2)).padStart(8,'0')).join``,2)
    }
    
    function numToIp(num) {
      return [num>>24&255,num>>16&255,num>>8&255,num>>0&255].join`.`
    }