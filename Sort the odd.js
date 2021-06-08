sortArray=a=>(arr=>a.map(x=>x%2?arr.shift():x))(a.filter((x,i,_)=>x%2).sort((a,b)=>a-b))

function sortArray(a) {
let b=a.filter((x,i,_)=>x%2).sort((a,b)=>a-b)
return a.map(x=>x%2?b.shift():x)
}

function sortArray(a) {
let i=0
let b=a.filter((x,i,_)=>x%2).sort((a,b)=>a-b)
return a.map(x=>x%2?b[i++]:x)
}