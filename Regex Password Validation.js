function validate(password) {
    console.log(password);
          return password.length>=6 && 
            /[a-z]/.test(password) && 
            /[A-Z]/.test(password) && 
            /[0-9]/.test(password) &&
            /^[a-zA-Z0-9]+$/.test(password);
          
          }
    
    function validate(password) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/g.test(password);
    }