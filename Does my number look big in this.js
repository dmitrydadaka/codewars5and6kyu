function narcissistic( value ) {
    var getPow = value.toString().split('').map(function(x) {
      return Math.pow(x, value.toString().length);
    });
    var getAccumValue = getPow.reduce(function(a, c) {
      return a + c;
    });
  
    // Passing result.
    return getAccumValue === value;
  }