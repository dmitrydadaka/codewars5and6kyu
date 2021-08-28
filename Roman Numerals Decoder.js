const myMap=new Map();
myMap.set('I', 1);
myMap.set('V', 5);
myMap.set('X', 10);
myMap.set('L', 50);
myMap.set('C', 100);
myMap.set('D', 500);
myMap.set('M', 1000);

var solution = function(s) {
   var result=0;
   if(s){
     var s1=s.split('');
     s1.forEach(function(e,i){
          result += myMap.get(e) < myMap.get(s1[i+1]) ? -myMap.get(e) : myMap.get(e);  // used ternary oprator with '-' where required
     });
   }
   return result; //move it outside loop
}