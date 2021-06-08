function stringBreakers(n, string){
    string=string.replace(/ /g,'')
    let arr=[]
    for(let i=0;i<string.length;i+=n){    
        arr.push(string.slice(i,i+n))   
    }
    return arr.join`\n`
  }