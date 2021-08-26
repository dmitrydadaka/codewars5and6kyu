function prefill(n, v) {
    return /\D/.test(n)?(()=>{throw new TypeError(`${n} is invalid`)})():Array(+n).fill(v)
  }
  
  function prefill(n, v) {
    return /\D/g.test(n)?(()=>{throw new TypeError(`${n} is invalid`)})():Array(+n).fill(v)
  }
  
  function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
    return +n ? Array(n).fill(v) : [];
  }
  
  function isValidInteger(n) {
    if (
      typeof n === 'boolean' ||
      !isFinite(n) ||
      !Number.isInteger(Number(n)) ||
      Number(n) < 0
    )
      throw new TypeError(`${n} is invalid`)
  }
  
  
  function prefill(n, v) {
    isValidInteger(n)
  
    const array = []
    array.length = n
    array.fill(v)
  
    return array
  }