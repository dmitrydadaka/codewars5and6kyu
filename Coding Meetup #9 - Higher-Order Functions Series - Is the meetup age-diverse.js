function isAgeDiverse(list) {
    return list.some(({age})=>age>=100)?[10,20,30,40,50,60,70,80,90].every(x=>list.some(y=>y.age-x>=0&&y.age-x<=9)):false
    }
   
   function isAgeDiverse(list) {
     return [...Array(10)].every((_,i)=>list.find(({age})=>i+1>9?age>=100:~~(age/10)==i+1))
   }