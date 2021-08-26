function add(x, y)
{ x/=10000000
  y/=10000000
    return Math.round(Math.log2((2**x)*(2**y))*10000000)
}

function add(x, y)
{if(y==0)return x
    return add(x^y,(x&y)<<1)
}