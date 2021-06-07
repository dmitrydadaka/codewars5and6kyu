String.prototype.camelCase=function(){
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
  }
  
  String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  }
  
  String.prototype.camelCase=function(){
    return this.replace(/(^|\s)[a-z]/g,x=>x.toUpperCase()).split` `.join``
  }