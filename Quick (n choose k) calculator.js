function choose(n,k){
    var result = 1;
    for(var i=1; i <= k; i++){
        result *= (n+1-i)/i;
    }
    return Math.round(result)
}