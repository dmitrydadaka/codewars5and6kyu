function longestConsec(strarr, k) {
    // your code
  if(k<1||k>strarr.length){return ""}

    if(k==1){
   strarr.sort((a,b)=>a.length-b.length)

      return strarr[strarr.length-1]
    }
  if(k>1){
    var list =[];
      for (var i=0;i<strarr.length-k+1;i++)
        {
          list[i]=strarr.slice(i,k+i).join('');
         }

      var longest = list.reduce(function (a, b) { return a.length >= b.length ? a : b; });
      return longest;
    }  
  }

function longestConsec(strarr, k) {
    // your code
  if(k<1||k>strarr.length){return ""}

    if(k==1){
   strarr.sort((a,b)=>a.length-b.length)

      return strarr[strarr.length-1]
    }
  if(k>1){
    var list =[];
      for (var i=0;i<strarr.length;i++)
        {
          list[i]=strarr.slice(i,k+i).join('');
         }

      var longest = list.reduce(function (a, b) { return a.length >= b.length ? a : b; });
      return longest;
    }  
  }