function parse( data ){
    let arr=[]
    a=0
  data=data.replace(/[^isdo]/g,'').split('')
    for(let i=0;i<data.length;i++){
     if(data[i]=='i')a++
     if(data[i]=='d') a--
     if(data[i]=='s') a=a**2
     if(data[i]=='o')arr.push(a)
        }
   return arr 
  }