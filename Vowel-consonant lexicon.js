var solve = a => (a=[a.match(/[aeiou]/g)||[],a.match(/[^aeiou]/g)||[]].map(a => a.sort()).sort((a,b) => b.length-a.length), 1<a[0].length-a[1].length ? 'failed' : a[0].reduce((r,c,i) => r+c+(a[1][i]||''),''))

var solve = (a,b) => ([a,b]=[a.match(/[aeiou]/g)||[],a.match(/[^aeiou]/g)||[]].map(a => a.sort()).sort((a,b) => b.length-a.length), 1<a.length-b.length ? 'failed' : a.reduce((r,c,i) => r+c+(b[i]||''),''));

function solve(s) {

  let a = s.match(/[^aeiou]/g).sort();
  let b = s.match(/[aeiou]/g).sort();
  let r = '';
  
  if (a.length > b.length)
    [a, b] = [b, a];
    
  if (b.length - a.length > 1)
    return 'failed';
    
  return b
    .map((c, i) => c + (a[i] || ''))
    .join('');
  
};

function solve(s) {
  let a=[...s.replace(/[aoieu]/g,'')].sort()
  let b=[...s.replace(/[^aoieu]/g,'')].sort()
 return Math.abs(a.length-b.length)>1?
   'failed':a.length>b.length?a.reduce((p,c,i)=>p+(i==0?c:b[i-1]+c),''):
   a.length==b.length?b.map((e,i)=>e+a[i]).join``:
   b.map((e,i)=>i==0?e:a[i-1]+e).join``
}