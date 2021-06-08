function evenBinary(n) {
    const arr = n.split(' ')
    const evenNum = arr.filter(el => el%2 === 0)
    const sortNum = evenNum.sort((a,b) => a - b)
    
    const newArr = arr.map((elem) => {
      if (elem%2 === 0) {
        const newEl = sortNum.splice(0, 1)
        return newEl
      } else {
        return elem
      }
    })
    
    return newArr.join(' ')
  }