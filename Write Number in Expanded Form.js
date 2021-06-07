function expandedForm(num) {
    return [...num+''].map((x,i,arr)=>x+'0'.repeat(arr.length-1-i)).filter(x=>Number(x)!=0).join` + `
  }
  
  function expandedForm(num) {
    return [...num+''].map((x,i,arr)=>x=='0'?'':x+'0'.repeat(arr.length-1-i)).filter(x=>x).join` + `
  }
  
  function expandedForm(num) {
    return [...num+''].map((x,i,arr)=>x=='0'?'':x+'0'.repeat(arr.length-1-i)).filter(x=>x!='').join` + `
  }