function cakes(recipe, a) {
    return Math.min(...Object.keys(recipe).map(x=>~~(a[x]/recipe[x])||0))
  }
  
  function cakes(recipe, a) {
    if(!Object.keys(recipe).every(y=>recipe[y]<=a[y])) return 0
    return Math.min(...Object.keys(recipe).map(x=>~~(a[x]/recipe[x])))
  }