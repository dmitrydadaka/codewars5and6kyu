const strToHash = str =>
  JSON.parse(`{${str.replace(/(\w+)=(\d+)/g, (_, key, val) => `"${key}":${val}`)}}`);

function strToHash(str){
 return str==''?{}:str.split(', ').map(x=>x.split('=')).reduce((a,c)=>(a[c[0]]=c[1]*1,a),{})
}