const int32ToIp = int32 => [24, 16, 8, 0].map(e => int32 >> e & 255).join('.');

function int32ToIp(int32){
  return [(int32 & 0xFF000000) >>> 24, 
          (int32 & 0x00FF0000) >>> 16,
          (int32 & 0x0000FF00) >>> 8,
          (int32 & 0x000000FF)].join('.');
}

function int32ToIp(int32){
  if(int32==0)return '0.0.0.0'
  int32=int32.toString(2)
  let a=[]
  for(i=0;i<int32.length;i+=8){
   let b=parseInt(int32.slice(i,i+8),2)
   a.push(b)
   }
  return a.join`.`
}