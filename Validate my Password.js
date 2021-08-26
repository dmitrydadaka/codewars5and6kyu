function validPass(password){
return /^(?=.*[a-z])(?=.*[\d])[a-z\d]{4,19}$/i.test(password)?'VALID':'INVALID'
}

function validPass(password){
return /[a-z]/gi.test(password)&&/[0-9]/.test(password)&&password.length>3&&password.length<20&&password.replace(/[a-z0-9]/gi,'').length==0?'VALID':'INVALID'
}