function groupByCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')  
    }
    
    function groupByCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')  
    }
    
    function groupByCommas(n) {
    return n.toLocaleString()  
    }
    
    function groupByCommas(n) {
      if((n+'').length<4)return n+''
      n1=(n+'').slice((n+'').length%3)
      a=''
      b=(n+'').length-(n+'').length%3
    for(i=0;i<b;i+=3){
      a+=','+n1.slice(i,i+3)
      }
      return (n+'').length%3==0?a.slice(1):(n+'').slice(0,(n+'').length%3)+a
    }