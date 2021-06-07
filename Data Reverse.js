function dataReverse(data) {
    return [...data.join``.match(/.{8}|$/g).reverse().join``].map(Number)
    }
    
    const dataReverse = data => {
      const bytes = [];
      for (let i = 0; i < data.length; i += 8) {
        bytes.unshift(...data.slice(i, i + 8));
      }
      return bytes;
    };
    
    function dataReverse(data) {
      return Array.from(Array(data.length/8),(_,i)=>data.slice(i*8,(i+1)*8).join('')).reverse().join('').split('').map(x=>x*1)
    }