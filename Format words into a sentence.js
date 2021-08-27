function formatWords(words){
    return (words||[]).filter(x=>x!='').join(', ').replace(/(, )(\S+)$/, ' and $2');
    }
    
    function formatWords(w){
     if(!w) return ''
    let a=w.filter(x=>x!='')
    return !a.join``?'':a.length==1?a[0]:a.length==2?a[0]+' and '+ a.slice(-1):a.slice(0,-1).join`, `+' and '+a[a.length-1] 
    }