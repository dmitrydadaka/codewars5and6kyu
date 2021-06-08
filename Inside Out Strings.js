const insideOut=x=>x.replace(/\w+/g,y=>(z=y.split("")).slice(0,m=~~((l=z.length)/2)).reverse().concat((l>2&&l%2?z[m]:""),z.slice(-m).reverse()).join(""))

function insideOut(x){
return x.split(' ').map(x=>x.length%2==0?
      ([([...x.slice(0,x.length/2)]).reverse().join``,
      ([...x.slice(-x.length/2)]).reverse().join``]).join``:
                        x.length==1?x:
    ([([...x.slice(0,~~(x.length/2))]).reverse().join``,
      x.slice(~~(x.length/2),~~(x.length/2)+1),
      ([...x.slice(-~~(x.length/2))]).reverse().join``]).join``).join` `
      

}