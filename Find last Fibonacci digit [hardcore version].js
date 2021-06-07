function lastFibDigit(n) {
    const fib = new Array(61).fill(0)
    
    fib[0] = 0
    fib[1] = 1 
  
    for (let i = 2; i < 61; i++) 
      fib[i] = (fib[i - 1] + fib[i - 2]) % 10
      
    return fib[n % 60]
  }
  
  lastFibDigit=n=> 1*("011235831459437077415617853819099875279651673033695493257291"[n%60])
  
  // https://en.wikipedia.org/wiki/Pisano_period
  const pisanoMod10 = [0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 5, 1, 6, 7, 3, 0, 3, 3, 6, 9, 5, 4, 9, 3, 2, 5, 7, 2, 9, 1, 0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 5, 1, 6, 7, 3];
  
  const lastFibDigit= index =>
    pisanoMod10[index % 60];
  