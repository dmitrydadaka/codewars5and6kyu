function sortTheInnerContent(words)
{
  return words.replace(/\B(\w+)\B/g, $1=>[...$1].sort().reverse().join``)
}

function sortTheInnerContent(words)
{
  return words.replace(/\w+/g, x=>x.length>3?x[0]+[...x.slice(1,-1)].sort().reverse().join``+x.slice(-1):x)
}