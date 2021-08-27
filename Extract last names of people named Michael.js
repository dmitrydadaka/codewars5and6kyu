function getMichaelLastName(i) {
    return (i.match(/(?<=Michael )[A-Z]\w+/g)||[])
    }
    
    function getMichaelLastName(i) {
    return (i.match(/Michael ([A-Z]\w+)/g)||[]).map(x=>x.replace(/Michael /g,''))
    }
    
    function getMichaelLastName(i) {
    return (i.match(/Michael (\w+)/g)||[]).map(x=>x.replace(/Michael /g,'')).filter(x=>x[0].toUpperCase()==x[0])
    }