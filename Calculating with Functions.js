['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach(function(funName, i) {
    this[funName] = function(operation) {return operation ? operation(i) : i};
  });
  
  function plus(operandRight) {return function(operandLeft) {return operandLeft + operandRight}}
  function minus(operandRight) {return function(operandLeft) {return operandLeft - operandRight}}
  function times(operandRight) {return function(operandLeft) {return operandLeft * operandRight}}
  function dividedBy(operandRight) {return function(operandLeft) {return ~~(operandLeft / operandRight)}}
  
  const
    id = x => x,
    number = x => (f = id) => f(x),
    [zero, one, two, three, four, five, six, seven, eight, nine] =
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),
    plus = x => y => y + x,
    minus = x => y => y - x,
    times = x => y => y * x,
    dividedBy = x => y => ~~(y / x);
  
  'zero one two three four five six seven eight nine'.split(' ').forEach(
    (mth, num) => this[mth] = (f = val => val) => f(num) 
  )
  
  let plus      = (r) => (l) => l + r
  let minus     = (r) => (l) => l - r
  let times     = (r) => (l) => l * r
  let dividedBy = (r) => (l) => ~~(l / r)
  
  function zero(func)   { return func ? func(0) : 0; };
  function one(func)    { return func ? func(1) : 1; };
  function two(func)    { return func ? func(2) : 2; };
  function three(func)  { return func ? func(3) : 3; };
  function four(func)   { return func ? func(4) : 4; };
  function five(func)   { return func ? func(5) : 5; };
  function six(func)    { return func ? func(6) : 6; };
  function seven(func)  { return func ? func(7) : 7; };
  function eight(func)  { return func ? func(8) : 8; };
  function nine(func)   { return func ? func(9) : 9; };
  
  function plus( b )      { return function( a ) { return a + b; }; };
  function minus( b )     { return function( a ) { return a - b; }; };
  function times( b )     { return function( a ) { return a * b; }; };
  function dividedBy( b ) { return function( a ) { return ~~(a / b); }; };
  
  e=(n)=>{
   return function(s){
     return s?s(n):n}
  }
  zero=e(0)
  one=e(1)
  two=e(2)
  three=e(3)
  four=e(4)
  five=e(5)
  six=e(6)
  seven=e(7)
  eight=e(8)
  nine=e(9)
  
  function plus(x) {return function(y){return x+y}}
  function minus(x) {return function(y){return y-x}}
  function times(x) {return function(y){return x*y}}
  function dividedBy(x) {return function(y){return ~~(y/x)}}
  
  function e(n, s){
   if(!s){return n} 
    return s(n)}
  function zero(s) {return e(0,s)}
  function one(s) {return e(1,s)}
  function two(s) {return e(2,s)}
  function three(s) {return e(3,s)}
  function four(s) {return e(4,s)}
  function five(s) {return e(5,s)}
  function six(s) {return e(6,s)}
  function seven(s) {return e(7,s)}
  function eight(s) {return e(8,s)}
  function nine(s) {return e(9,s)}
  
  function plus(x) {return function(y){
    return x+y}}
  function minus(x) {return function(y){return y-x}}
  function times(x) {return function(y){return x*y}}
  function dividedBy(x) {return function(y){return ~~(y/x)}}