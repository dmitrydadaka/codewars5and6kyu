function greatestCommonFactor(array) {
    for (let i = Math.min(...array); i >=1; i--) {
      if (array.every(n => !(n % i))) {
        return i;
      }
    }
  };
  
  function greatestCommonFactor(array) {
    const gcf=(a,b)=>!b?a:gcf(b,a%b)
    return array.reduce((a,b)=>gcf(a,b),0)
  };
  
  function greatestCommonFactor(array) {
    let a=[]
     for(e=0;e<array.length;e++){
     let  b=[]
    for(i=1;i<=Math.min(...array);i++){
     if(array[e]%i==0)b.push(i)
    }
       a.push(b)
     }
    a=a.map((e,i,arr)=>e.filter(y=>arr.every(x=>x.includes(y))))
    return a[0][a[0].length-1]
  };