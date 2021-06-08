const reducer = (acc, x) =>
  acc[acc.length - 1] === x
    ? acc
    : [...acc, x]

const uniqueInOrder = x => [].reduce.call(x, reducer, [])

function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

var uniqueInOrder=function(e){
 return [...e].filter((x,i,_)=>x!=_[1+i])
}