class NamedOne {
    constructor(first, last) {
      this.firstName = first;
      this.lastName = last;
    }
    
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    
    set fullName(fullName) {
      if(fullName.match(/\w+ \w+/))
        [this.firstName, this.lastName] = fullName.split(' ');
    }
  }
  
  
  
  
  
  class NamedOne {
    constructor(firstName, lastName) {
      Object.assign(this, {firstName, lastName});
    }
    
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    
    set fullName(val) {
      if (/^\w+\s\w+$/.test(val)) {
        [this.firstName, this.lastName] = val.split(` `);
      }
    }
  }
  
  
  
  
  function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
  
    Object.defineProperty(this, "fullName", {
      set: function(value) {
       
        if (/^\w+ \w+$/g.test(value)) {
          this.firstName = value.match(/^\w+/).join``
          this.lastName = value.match(/\w+$/).join``
        }
      },
      get: function() {
        return this.firstName + ' ' + this.lastName;
      }
    });
  }
  function NamedOne(first, last) {
  this.first=first
  this.last=last
    Object.defineProperties(this, { firstName : {
      get(){return this.first},
      set(name){this.first=name}
    },
      lastName :{
        get(){return this.last},
        set(name){this.last=name}
        },
      fullName:{
              get: function () { return this.first + ' ' + this.last },
              set: function (name){
                if(/^[a-z]+ [a-z]+$/gi.test(name)){
                this.first = name.match(/^[a-z]+/i).join``
                this.last = name.match(/[a-z]+$/i).join``
                }
              }
        }
  })}