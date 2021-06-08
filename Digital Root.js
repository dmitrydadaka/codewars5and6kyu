function digital_root(n) {
    if(n<10)return n
    return digital_root( n.toString().split('').reduce((a,c)=> {
      return a + +c
    },0));
      
  }