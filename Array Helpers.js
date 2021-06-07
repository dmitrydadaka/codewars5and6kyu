Array.prototype.square  = Square;
Array.prototype.cube    = Cube;
Array.prototype.average = Average;
Array.prototype.sum     = Sum;
Array.prototype.even    = Even;
Array.prototype.odd     = Odd;

function Square()  { return this.map(function(e){return e*e;});                         }
function Cube()    { return this.map(function(e){return e*e*e;});                       }
function Average() { return this.sum() / this.length;                                   }
function Sum()     { return (this == '') ? 0 : this.reduce(function(a,b){return a+b;}); }
function Even()    { return this.filter(function(e){return e%2==0;});                   }
function Odd()     { return this.filter(function(e){return e%2!=0;});                   }

Object.assign(Array.prototype, {
  square(){return this.map(x=>x*x)},
  cube(){return this.map(x=>x*x*x)},
  sum(){return this.reduce((acc,val)=>acc+val,0)},
  average(){return this.length?this.sum()/this.length:NaN},
  odd(){return this.filter(x=>x&1)},
  even(){return this.filter(x=>!(x&1))}
})

Array.prototype.square=function(){
return this.map(x=>x**2)
}
Array.prototype.cube=function(){
return this.map(x=>x**3)
}
Array.prototype.average=function(){
return this.reduce((x,y)=>x+y,0)/this.length
}
Array.prototype.sum=function(){
return this.reduce((x,y)=>x+y,0)
}
Array.prototype.even=function(){
return this.filter(x=>x%2==0)
}
Array.prototype.odd=function(){
return this.filter(x=>x%2)
}
  