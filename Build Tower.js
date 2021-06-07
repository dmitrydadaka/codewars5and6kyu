function towerBuilder(n) {
    return Array.from(Array(n),
       (_,i)=>' '.repeat(n-i-1)+
      '*'.repeat(i*2+1)+' '.repeat(n-i-1))
  }