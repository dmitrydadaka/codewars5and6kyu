function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }
  
  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

  findOdd=(a)=>a.map(x=>a.filter(y=>x==y)).filter(x=>x.length%2)[0][0]