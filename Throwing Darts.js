function scoreThrows(radii){
    return radii.every(x=>x<5)&&radii.length?100+radii.length*10:radii.reduce((a,c)=>a+(c<5?10:c<=10?5:0),0)
  }