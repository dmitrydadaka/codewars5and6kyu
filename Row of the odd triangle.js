function oddRow(n) {
    return Array.from(Array(n),(_,i)=>n**2-n+1+i*2)
  }