value=t=>t?t[0].charCodeAt()+value(t.slice(1))-96:0
  const solve = s =>
  s.split(/[aeiou]+/).reduce((v,t)=> Math.max(v,value(t)), 0)

value=t=>t?t[0].charCodeAt()+value(t.slice(1)):0
const solve = s =>
  Math.max(...s.split(/[aeiou]+/).map(val => [...val].reduce((pre, val) => pre + val.charCodeAt() - 96, 0)));

const solve = s =>
  Math.max(...s.split(/[aeiou]+/).map(val => [...val].reduce((pre, val) => pre + val.charCodeAt() - 96, 0)));

function solve(s) {
  return s.split(/[aoieu]+/).reduce((y,x)=>Math.max(y,[...x].reduce((a,c)=>a+c.charCodeAt()-96,0)),0)
};

function solve(s) {
  let al=' abcdefghijklmnopqrstuvwxyz'.split('')
  return Math.max(...s.split(/[aoieu]/).map(x=>[...x].reduce((a,c)=>a+al.indexOf(c),0)))
};
