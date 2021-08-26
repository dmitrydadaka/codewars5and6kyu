function rot(s) {
    return [...s].reverse().join``
}
function selfieAndRot(s) {
  return (s=s.replace(/.+/g, s=>s+s.replace(/./g,'.')))+'\n'+rot(s)
}
function oper(fct, s) {
    return fct(s)
}

function rot(strng) {
   // let dots='.'.repeat(strng.split('\n')[0].length)
    return [...strng].reverse().join``
}
function selfieAndRot(strng) {
  let dots='.'.repeat(strng.split('\n')[0].length)
    let str=strng.replace(/(\n)/g, $1=>dots+$1)
    let str1=[...str].reverse().join``
    return str+dots+'\n'+dots+str1
}
function oper(fct, s) {
    return fct(s)
}