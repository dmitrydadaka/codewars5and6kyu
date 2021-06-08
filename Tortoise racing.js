const race=(v1, v2, g)=> v1>=v2? null: 
    [Math.floor(g/(v2-v1)),Math.floor((g * 3600) / (v2 - v1)%3600/60),Math.floor((g * 3600) / (v2 - v1)%60)]