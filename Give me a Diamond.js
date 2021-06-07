const diamond = n =>
  n < 0 || --n % 2 ? null : [...Array(n + 1)].map((_, idx) => ` `.repeat(Math.abs(n / 2 - idx)) + `*`.repeat(n + 1 - Math.abs(n - 2 * idx)) + `\n`).join(``);

function diamond(n){
  return n>0&&n%2!=0?Array.from(Array(Math.ceil(n/2)),(_,i)=>' '.repeat(Math.floor(n/2)-i)+'*'.repeat(1+i*2)+'\n')
 .concat(Array.from(Array(Math.ceil(n/2)),(_,i)=>' '.repeat(i)+'*'.repeat(n-i*2)+'\n').slice(1)).join``:
  null
}