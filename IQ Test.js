function iqTest(numbers){
    numbers=numbers.split(' ').map(x=>+x%2)
    return (numbers.reduce((a,b)=>a+b)===1
           ?numbers.indexOf(1):numbers.indexOf(0))+1
    }