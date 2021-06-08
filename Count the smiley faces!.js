//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.reduce((a,c)=>a+/[:;]{1}[-~]?[)D]{1}/.test(c),0)
    }
    
    //return the total number of smiling faces in the array
    function countSmileys(arr) {
    return arr.reduce((a,c)=>a+/^[:;][-~]?[)D]$/.test(c),0)
    }
    
    //return the total number of smiling faces in the array
    function countSmileys(arr) {
    return arr.filter(x=>/^[:;][-~]?[)D]$/.test(x)).length
    }
    
    //return the total number of smiling faces in the array
    function countSmileys(arr) {
    return arr.filter(x=>':):D:-):-D:~):~D;D;);-D;-);~D;~)'.includes(x)).length
    }