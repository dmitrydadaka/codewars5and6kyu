const wave = s => Array.from( s, (_,i) => /\s/.test(s[i]) ? null : s.slice(0,i) + s[i].toUpperCase() + s.slice(i+1) ).filter(Boolean) ;

var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)

function wave(str){
  return Array.from(Array(str.length),(_,i)=>str.toLowerCase().slice(0,i)+str[i].toUpperCase()+str.toLowerCase().slice(i+1)).filter(x=>[...x.replace(/ /g,'')].some(x=>x==x.toUpperCase()))
}