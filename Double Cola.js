const whoIsNext = (names, r) =>
  r > names.length ? whoIsNext(names, Math.floor((r - names.length + 1) / 2)) : names[--r];

function whoIsNext(names, r){
  let geekNames = names.length;
  while(r > geekNames) {
    r = r - geekNames;
    geekNames = geekNames * 2;
  }
  return names[Math.ceil(r/(geekNames/names.length))-1];
}

function whoIsNext(names, r){
  let geekNames = names.length;
  while(r > geekNames) {
    r = r - geekNames;
    geekNames = geekNames * 2;
  }
  return names[Math.ceil(r/(geekNames/names.length))-1];
}