function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }
  
  function findOutlier(s){
    return s.filter(x=>x%2).length==1?s.find(x=>x%2):s.find(x=>x%2==0)
  }