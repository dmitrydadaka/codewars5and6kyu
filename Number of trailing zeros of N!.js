const zeros = n =>
  n < 5 ? 0 : (n / 5 ^ 0) + zeros(n / 5);

function zeros (n) {
  count=0
  while(n>0){n=Math.floor(n/5) 
             count+=n}
  return count
}

function zeros(n)
{
 
    if(n<=0) 
      return 0
     
    let count = 0;
 
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;
}