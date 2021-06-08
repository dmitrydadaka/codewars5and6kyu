function finance(n) {
    let total = 0
    let weekArray = []
    for ( let week = 0; week <= n; week++ ) {
      weekArray.push(week)
    }
    
    weekArray.map( (week) => {
      for ( let day = 0; day <= n; day++ ) {
        if ( week <= day ) {
          total = total + week + day
        }
      }
    })
    return total
}

finance=a=>a*++a*++a/2

const finance = (n) => n * (n + 1) * (n + 2) / 2;

function finance(n) {
  let sum = 0;
  let current_sum;
  for (let i = 0; i <= n; i ++){ 
    current_sum= (2 * i + 2 * i + (n - i)) * (n + 1 - i) / 2
    sum += current_sum}
  return sum;
}