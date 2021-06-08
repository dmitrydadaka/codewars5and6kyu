persistence=(n,c)=>n>9?persistence(n.toString().split('').reduce((x,y)=>x*y),c?(c+1):1):c?c:0

function persistence(num, cnt=0) {
  let arrayNum = num.toString().split('');
  return arrayNum.length === 1 ?
    cnt :
    persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
}

function persistence(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}

function persistence(num) {
  let c=0
   while(num>9){
     num=[...(num+'')].reduce((a,c)=>a*c,1)
     c++
     }
  return c
}