thirt=(a,b=[1,10,9,12,3,4])=>a<100?a:thirt([...''+a].reverse().map((e,i)=>e*b[i%6]).reduce((a,b)=>a+b))
