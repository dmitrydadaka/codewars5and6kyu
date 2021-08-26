function revrot(str, sz) {
    return (str.match(RegExp(`.{${sz}}`,'g'))||[]).map((x,i)=>[...x].reduce((a,c)=>a+c**3,0)%2==0?[...x].reverse().join``:x.slice(1)+x[0]).join``
  }
  
  const sum = arr => arr.reduce((a, b) => a + +b, 0);
  const rotate = arr => [...arr.slice(1), arr[0]];
  
  function revrot(string, size) {
    return (string.match(new RegExp(`.{${size}}`, 'g')) || [])
      .reduce((a, [...b]) => a.concat(sum(b) % 2 ? rotate(b) : b.reverse()), [])
      .join("");
  }
  
  const revrot = (str, sz) =>
    (str.match(new RegExp(`.{${sz}}`, `g`)) || []).map(val => val.replace(/[02468]/g, ``).length % 2 ? val.replace(/(.)(.+)/, `$2$1`) : [...val].reverse().join(``)).join(``);
  
  function revrot(str, sz) {
    let a=[]
    for(i=0;i<str.length-str.length%sz;i+=sz) a.push(str.slice(i,i+sz))
  return a.map((x,i)=>[...x].reduce((a,c)=>a+c**3,0)%2==0?[...x].reverse().join``:x.slice(1)+x[0]).join``
  }