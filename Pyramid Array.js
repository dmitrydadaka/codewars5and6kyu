const pyramid = n =>
  [...Array(n)].map((_, idx) => [...Array(++idx).fill(1)]);

function pyramid(n) {
  return Array.from(Array(n), (_,i)=>Array(i+1).fill(1))
}