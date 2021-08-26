function findSenior(list) {
    let max=Math.max(...list.map(x=>x.age))
    return list.filter(x=>x.age==max)
  }