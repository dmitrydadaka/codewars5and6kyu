function binaryToString(binary) {
    return binary.replace(/[01]{8}/g,x=>String.fromCharCode(`0b${x}`))
    }
    
    function binaryToString(binary) {
    return binary.replace(/[01]{8}/g,x=>String.fromCharCode(parseInt(x,2)))
    }

    function binaryToString(binary) {
    return Array.from(Array(binary.length/8),(_,i)=>binary.slice(i*8,8+i*8)).map(x=>String.fromCharCode(parseInt(x,2))).join``
    }