filters = {
    even:"x%2==0",
    odd:"x%2==1",
    under:"x<y",
    over:"x>y",
    inRange:"(y<=x)&&(x<=z)"  
  }
  
  for (f in filters) {
    Array.prototype[f] = new Function("y","z",
      "return this.filter(function(x){return "+
      "typeof(x) == 'number' && x%1 === 0 &&" +
      filters[f]+"})")  
  }

  Array.prototype.even = function(){
    return this.filter((y,i)=>y%2==0&&typeof y=='number'&&y%1==0)
  }
  
  Array.prototype.odd = function(){
    return this.filter((y,i)=>y%2&&typeof y=='number'&&y%1==0)
  }
  
  Array.prototype.under = function(x){
    return this.filter((y,i)=>y<x&&typeof y=='number'&&y%1==0)
  }
  
  Array.prototype.over = function(x){
    return this.filter((y,i)=>y>x&&typeof y=='number'&&y%1==0)
  }
  
  Array.prototype.inRange = function(min,max){
   return this.filter((y,i)=>y>=min&&y<=max&&typeof y=='number'&&y%1==0)
  }