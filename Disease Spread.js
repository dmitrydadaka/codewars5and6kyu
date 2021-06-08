function epidemic(tm, n, s0, i0, b, a) {
    const dt = tm / n
    const iArr = new Array(n).fill()
    const sArr = new Array(n).fill()
    const rArr = new Array(n).fill()
    
    iArr[0] = i0
    sArr[0] = s0
    rArr[0] = 0
    
    iArr.slice(1).forEach((_, i) => {    
      sArr[i + 1] = sArr[i] - dt * b * sArr[i] * iArr[i]
      iArr[i + 1] = iArr[i] + dt * (b * sArr[i] * iArr[i] - a * iArr[i])
      rArr[i + 1] = rArr[i] + dt * iArr[i] * a
    })
    
    return Math.ceil(Math.max.apply(null, iArr))
  }
  
  function epidemic(tm, n, s0, i0, b, a) {
    let dt=tm/n
    const S = new Array(n).fill();
    const I = new Array(n).fill();
    const R = new Array(n).fill();
      [S[0],I[0],R[0]]=[s0,i0,0]
      I.slice(1).forEach((_,i)=>{
      S[i+1] = S[i] - dt * b * S[i] * I[i];
      I[i+1] = I[i] + dt * b * S[i] * I[i] - a * I[i]
      R[i+1] = R[i] + dt * I[i] *a
     } )
      return Math.ceil(Math.max.apply(null, I))
  }
    function epidemic(tm, n, s0, i0, b, a) {
    
    const dt = tm / n;
    const infectedArray = new Array(n).fill();
    const susceptibleArray = new Array(n).fill();
    const recoveredArray = new Array(n).fill();
    
    [infectedArray[0], susceptibleArray[0], recoveredArray[0]] = [i0, s0, 0];
    
    infectedArray.slice(1).forEach((_, i) => {    
      susceptibleArray[i + 1] = susceptibleArray[i] - dt * b * susceptibleArray[i] * infectedArray[i];
      infectedArray[i + 1] = infectedArray[i] + dt * (b * susceptibleArray[i] * infectedArray[i] - a * infectedArray[i]);
      recoveredArray[i + 1] = recoveredArray[i] + dt * infectedArray[i] * a;
    })
    
    return Math.ceil(Math.max.apply(null, infectedArray));
  }