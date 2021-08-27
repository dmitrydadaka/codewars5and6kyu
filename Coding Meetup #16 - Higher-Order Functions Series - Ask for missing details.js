function askForMissingDetails(list) {
    return list.filter(x=>{
      for(let k in x){
        if(x[k]==null){
          x['question']=`Hi, could you please provide your ${k}.`
          return x}
        }
    })
                                
   }
   
   const askForMissingDetails = list =>
       list.reduce((p, c) => {
               for(var key in c)
                 if(c[key] == null){
                   c.question = `Hi, could you please provide your ${key}.`;
                   p.push(c);
                 }
               return p
           },[])
   
   
   const askForMissingDetails = list => 
     list.filter(dev => 
     Object.keys(dev).some(key =>
     dev[key] === null && (dev['question']=`Hi, could you please provide your ${key}.`)));
   
   
   function askForMissingDetails(list) {
    return list.filter(x=>Object.values(x).includes(null)).map(x=>(x.question=`Hi, could you please provide your ${Object.entries(x).filter(([x,y])=>y==null).map(x=>x[0])}.`,x))// thank you for checking out the Coding Meetup kata :)
   }