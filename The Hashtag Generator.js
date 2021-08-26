const generateHashtag = str =>
  (val => !!str.trim() && val.length <= 140 && val)
  (`#${str.replace(/(?:^|\s+)(\w)/g, (_, $1) => $1.toUpperCase())}`);

function generateHashtag (str) {
  return str.replace(/ /g,'')==''||str.replace(/ /g,'').length>139?false:'#'+str.replace(/\w+/g, x=>x[0].toUpperCase()+x.slice(1)).replace(/ /g,'')
}