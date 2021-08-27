String.prototype.ipv4Address=function(){
    return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){4}$/g.test(this+'.')
  }
  
  String.prototype.ipv4Address=function(){
   return /^((\d|([1-9]\d)|(1\d\d)|(2[0-4]\d)|(25[0-5]))\.){4}$/.test(this+'.');
  }
  
  String.prototype.ipv4Address=function(){
   return this.replace(/\d+/g, x=>x.length>1&&+x[0]==0?'':x).length==this.length&&this.replace(/[^0-9.]/g,'').length==this.length&&this.split('.').every(x=>+x<256&&+x>-1&&x!=''&&x==+x)&&this.split('.').length==4
  }