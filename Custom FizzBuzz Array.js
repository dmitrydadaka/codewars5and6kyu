var fizzBuzzCustom = function(s1='Fizz', s2='Buzz', num1=3, num2=5) {
    return [...Array(100)].map((_,i)=>++i%(num1*num2)==0?s1+s2:i%num1==0?s1:i%num2==0?s2:i)
    };
    
    var fizzBuzzCustom = function(s1='Fizz', s2='Buzz', num1=3, num2=5) {
    return Array.from({length:100},(_,i)=>(i+1)%num1==0&&(i+1)%num2==0?s1+s2:(i+1)%num1==0?s1:(i+1)%num2==0?s2:i+1)
    };