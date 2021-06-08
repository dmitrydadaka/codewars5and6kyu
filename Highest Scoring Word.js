function high(x){
    return x.split(' ')[x.split` `.map(x=>[...x.toLowerCase()].reduce((a,c)=>a+c.charCodeAt()-96,0))
    .findIndex((x,i,_)=>x==Math.max(..._))]
    
    }
    
    function high(x){
    return x.split(' ')[(x.split` `.map(x=>[...x.toLowerCase()].reduce((a,c)=>a+c.charCodeAt()-96,0))
    .findIndex((x,i,_)=>x==Math.max(..._)))]
    
    }
    
    function high(x){
    return (v=>x.split(' ')[v])(x.split` `.map(x=>[...x.toLowerCase()].reduce((a,c)=>a+c.charCodeAt()-96,0))
    .findIndex((x,i,_)=>x==Math.max(..._)))
    
    }
    
    function high(x){
    let a=x.split` `.map(x=>[...x.toLowerCase()].reduce((a,c)=>a+c.charCodeAt()-96,0))
    let b=a.findIndex(x=>x==Math.max(...a))
    return x.split(' ')[b]
    }