function arrayDiff(a, b) {
    return a.filter((x,i)=>b.every(y=>y!=x)) 
    }