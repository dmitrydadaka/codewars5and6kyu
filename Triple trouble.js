function tripledouble(num1, num2) {
    return ~~/(.)(\1{2})(?=.*?,.*?\1{2})/.test(num1 + "," + num2);
  }

  function tripledouble(num1, num2) {
    for (let i = 0; i < 10; i++) {
      if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
        return 1;
      }
    }
    return 0;
  }
  
  function tripledouble(num1, num2) {
    let nums = [...Array(10).keys()];
      
    return +nums.some(num => 
      num1.toString().includes(num.toString().repeat(3)) &&
      num2.toString().includes(num.toString().repeat(2))
    );
  }
  
  function tripledouble(num1, num2) {
   const a=[...(num1+'')].filter((x,i,_)=>x==_[i+1]&&x==_[i+2])
   const b=[...(num2+'')].filter((x,i,_)=>x==_[i+1])
   return a.some(x=>b.some(y=>y==x))?1:0
  }