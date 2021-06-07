function validPhoneNumber(r){
    return /^\(\d{3}\) \d{3}-\d{4}$/.test(r)
  }