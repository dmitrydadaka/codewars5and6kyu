function to_nato(words) {
    return (e=>e.replace(/\w/g,e=>NATO[e]+' ').trim())(words.toLowerCase().split(' ').join``.replace(/(\!|\?|\.|\,)/g,'$1 ').trim())
    }
    
    function to_nato(words) {
    return words.replace(/ /g,'').replace(/\w/g,e=>NATO[e.toLowerCase()]+' ').trim().replace(/\.|\,|\!|\?/g,e=>e+' ').trim()
    }