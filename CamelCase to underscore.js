const toUnderScore = name => name.replace(/([a-z]|[A-Z])(?=[A-Z]|\d+)|(\d)(?=[A-Z])/g, '$1$2_');

const toUnderScore = name => {
    return name.replace(/(?<=[^_-])_?(?=[A-Z])|(?<=[^\d_])_?(?=\d)/g, "_");
}

const toUnderScore = name => {
  return name.replace(/([A-Za-z](?=[A-Z\d])|\d(?=[A-Z]))/g,"$1_")
}

const toUnderScore = s => s.replace(/([A-Za-z](?=[A-Z\d])|\d(?=[A-Z]))/g,'$&_')

const toUnderScore = name => {
  if(name=='')return ''
  return name[0]==name[0].toUpperCase()&&name[0]!='_'?name.replace(/[A-Z]|\d+/g,(x,i)=>x=='_'||name[i-1]=='_'?x:'_'+x).slice(1):name.replace(/[A-Z]|\d+/g,(x,i)=>x=='_'||name[i-1]=='_'?x:'_'+x)
}