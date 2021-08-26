function posAverage(s) {
    s2 = s.split`, `; let  [same,l] = [0,0];
      for(let i = 0; i< s2.length; i++)
             for(let j = i+1; j < s2.length ; j++) 
                same+=[...s2[i]].reduce((acc,c,i)=>(l++, acc + (s2[j][i] === c)),0);
     return same/l*1e2
  }
  
  const posAverage = (s, subs = s.split(', '), n = subs.length) => 100 * 
  ((subs.reduce((subsCommon, str1, i) => 
   (subsCommon.push(subs.slice(i+1).reduce((common, str2, j) => 
  ([...str1].forEach((char, k) => { if(char == str2[k]) common++}), common), 0)), 
    subsCommon), []).reduce((sum, el) => sum+=el)/(n*(n-1)*subs[0].length/2)).toFixed(11));
  
  function posAverage(s) {
      let com=0;
      let all=0;
     s.split`, `.map((x,i,arr)=>{
        for (let j=i+1;j<arr.length;j++){
          let tempArr=arr[j].split``
          arr[i].split``.map((v,z)=>v===tempArr[z]?com++:all++)
        }
    })
      return com / (all+com) * 100;
  }