var findDup=function(arr){
    var a = 0, found = {};
    while( !found[arr[a]] ) found[arr[a++]]=true
    return arr[a]
  }
  
  var findDup=function(arr){
    return arr.find(x=>arr.indexOf(x)!=arr.lastIndexOf(x))
  }