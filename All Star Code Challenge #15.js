const rotate = s => Array.from({length: s.length}, _ => s = s.slice(1) + s[0]);

function rotate(str){
return Array.from({length:str.length},
              (_,i)=> str.slice(i+1)+str.slice(0,i+1))
}