function scramble(str1, str2) {
    var count = {};

    [].forEach.call(str1, function(a) {
        count[a] = (count[a] || 0) + 1;
    });

    return [].every.call(str2, function(a) {
        return count[a]--;
    });
}

function scramble(str1, str2) {
 return [...str2].every(x=>str2.split(x).length<=str1.split(x).length)
}


function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}

function scramble(str1, str2) {
 let obj={}
 for(let i =0;i<str1.length;i++){
   if(obj[str1[i]]) obj[str1[i]]+=1
   else obj[str1[i]]=1
   }
  for(let i=0;i<str2.length;i++){
    if(obj[str2[i]])obj[str2[i]]-=1
    else return false
    }
  return true
}