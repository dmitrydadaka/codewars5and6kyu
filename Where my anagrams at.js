function anagrams(a, b) {
    return b.filter(w=>''+[...a].sort()===''+[...w].sort());
  }
  
  function anagrams(word, words) {
    return words.filter(x=>[...x].sort().join``==[...word].sort().join``)
  }