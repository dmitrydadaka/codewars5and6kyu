function averageString(str) {
    const a='zero,one,two,three,four,five,six,seven,eight,nine'.split(',')
    const b=str.split(' ')
    let sum=0
    for(let i of b){
      if(a.indexOf(i)==-1)return 'n/a'
      sum+=a.indexOf(i)
      }
    return a[~~(sum/b.length)]
  }