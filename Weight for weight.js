function orderWeight(s) {
    return s.split(' ').sort((a,b)=>a.split('').reduce((pv,cv)=>pv+ +cv,0)-b.split('').reduce((pv,cv)=>pv+ +cv,0)||(a>b?1:-1)).join(' ');
  }
  
  function orderWeight(strng) {
    return strng.split(" ").sort(function f(a, b){ 
      return eval(a.split("").join("+")) - eval(b.split("").join("+")) + ([a, b].sort()[1] == a ? 0.1 : -0.1);
    }).join(" ");
  }
  
  function orderWeight(s) {
      return s.split(/\s+/).sort((a,b,arr)=>[...a].reduce((p,c)=>p+ +c,0)-[...b].reduce((p,c)=>p+ +c,0)||a.localeCompare(b)).join` `
  }