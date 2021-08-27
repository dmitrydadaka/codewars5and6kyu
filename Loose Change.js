looseChange=(cents)=>(c=>({Quarters:c/25^0,Dimes:c%25/10^0,Nickels:c%25%10/5^0,Pennies:c%5^0}))(Math.max(cents,0))


function looseChange(cents){
  var a={Nickels:0,Pennies:0,Dimes:0,Quarters:0};
  if (cents <= 0) return a;
  a.Quarters = Math.floor(cents/25);
  a.Dimes = Math.floor(cents%25/10);
  a.Nickels = Math.floor(cents%25%10/5);
  a.Pennies = Math.floor(cents%25%10%5);
  return a;
}

function looseChange(cents){
 
 let obj= {'Nickels': 0, 'Pennies': 0, 'Dimes':0,'Quarters':0}
 if(cents<=0) return obj
 if(cents%1)return ~~(cents)
 if(cents>=25){
   obj['Quarters']=~~(cents/25)
   cents-=25*obj['Quarters']
   }
 if(cents>=10){
   obj['Dimes']=~~(cents/10)
   cents-=10*obj['Dimes']
   }
  if(cents>=5){
    obj['Nickels']=~~(cents/5)
    cents-=5*obj['Nickels']
    }
  if(cents) obj['Pennies']=cents
  
  return obj
}