function multiplicationTable(row,col){
    let result = [];
    for( let a = 0; a < row; a++) {
      result[a] = [];
      for( let b = 0; b < col; b ++) {
        result[a].push( (a + 1) * (b + 1));
      }
    }
    return result;
  }
  
  function multiplicationTable(row,col){
    return [...Array(row)].map((_, i) =>
      [...Array(col)].map((_, j) => (i + 1) * (j + 1))
    );
  }
  
  const multiplicationTable = (row, col) => Array(...Array(row)).map((_, i) => Array(...Array(col)).map((_, j) => (i + 1) * (j + 1)));
  
  function multiplicationTable(row,col){
   
    return Array.from(Array(row),(_,i)=>Array.from(Array(col),(_,j)=>(j+1)*(i+1)))
  
  }