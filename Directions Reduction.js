function isOppo(dir1,dir2) {
    if (dir1 + dir2 === 'SOUTHNORTH') return true;
    if (dir1 + dir2 === 'NORTHSOUTH') return true;
    if (dir1 + dir2 === 'EASTWEST') return true;
    if (dir1 + dir2 === 'WESTEAST') return true;
    return false;
}
  
function dirReduc(arr){
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    if (isOppo(arr[i], arr[i+1])) {
      arr.splice(i,2);
      return dirReduc(arr);
    }
  }
  return arr;
}
function dirReduc(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
        arr[i] === "EAST" && arr[i+1] === "WEST" ||
        arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
        arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
        arr.splice(i, 2);
        count++;
        i--;
    }
  }
  return count === 0 ? arr : dirReduc(arr);
}

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

function dirReduc(arr){
  arr=arr.join``
  for(i=0;i<arr.length;i++){
  arr=arr.replace(/NORTHSOUTH|SOUTHNORTH|WESTEAST|EASTWEST/g,'')   
  }
  return arr.match(/NORTH|EAST|SOUTH|WEST/g)||[]
}