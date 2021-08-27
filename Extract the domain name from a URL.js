function domainName(url){
    return url.replace(/https|http|www|(:\/\/)/g,'').split('.').find(x=>x.length!=0)
    }