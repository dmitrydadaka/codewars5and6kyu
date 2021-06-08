var findInArray = function(array, iterator) {
    var ret = -1;
    array.some(function(a,i) {if (iterator(a,i)) {ret = i; return true;} return false;});
    return ret;
  };
  
  var findInArray = function(array, iterator) {
      for (let i = 0; i < array.length ; i++){
      if(iterator(array[i],i)){
        return i 
        break
      }
      }
      return -1 
  };
  
  var findInArray = function(array, iterator) {
   return array.findIndex(iterator) 
  };
  
  var findInArray = function(array, iterator) {
    return array.map(iterator).indexOf(true)
  };