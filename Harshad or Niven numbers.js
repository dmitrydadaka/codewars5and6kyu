/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
 var Harshad = ( function() {
    'use strict';
  
    return {
      /**
       * Returns true when the given number is a valid Harshad number.
       *
       * @param {Number} number The given number
       * @returns {Boolean}
       * @function Harshad.isValid
       */
      isValid( number ) {
        let sum=[...number+''].reduce((a,c)=>a+ +c,0)
        return number%sum==0// Your implementation goes here
      },
      /**
       * Gets the next Harshad number after the given number.
       *
       * @param {Number} number The given number
       * @returns {Number}
       * @function Harshad.getNext
       */
      getNext( number ) {
       return this.isValid(++number)?number:this.getNext(number) // Your implementation goes here
      },
      /**
       * Returns the suite of Harshad numbers, starting after a given number.
       *
       * @param {Number} count The number of elements to return
       * @param {Number} start The number after which the serie should start;
       *  defaults to 0
       * @returns {Array}
       * @function Harshad.getSerie
       */
      getSerie( count, start=0,arr=[]) {
        return count?(start=this.getNext(start),this.getSerie(--count,start, [...arr,start])):arr// Your implementation goes here
      }
    };
  
  } () );
  
  /**
   * Utility class for Harshad numbers (also called Niven numbers).
   *
   * @namespace Harshad
   */
  var Harshad = ( function() {
    'use strict';
  
    return {
      /**
       * Returns true when the given number is a valid Harshad number.
       *
       * @param {Number} number The given number
       * @returns {Boolean}
       * @function Harshad.isValid
       */
      isValid( number ) {
        let sum=[...number+''].reduce((a,c)=>a+ +c,0)
        return number%sum==0// Your implementation goes here
      },
      /**
       * Gets the next Harshad number after the given number.
       *
       * @param {Number} number The given number
       * @returns {Number}
       * @function Harshad.getNext
       */
      getNext( number ) {
       return this.isValid(++number)?number:this.getNext(number) // Your implementation goes here
      },
      /**
       * Returns the suite of Harshad numbers, starting after a given number.
       *
       * @param {Number} count The number of elements to return
       * @param {Number} start The number after which the serie should start;
       *  defaults to 0
       * @returns {Array}
       * @function Harshad.getSerie
       */
      getSerie( count, start=0 ) {
        let a=[]
        let number=start+1
        while(a.length<count){
          let sum=[...number+''].reduce((a,c)=>a+ +c,0)
          if(number%sum==0) a.push(number)
          number++
          }
        return a// Your implementation goes here
      }
    };
  
  } () );

  /**
   * Utility class for Harshad numbers (also called Niven numbers).
   *
   * @namespace Harshad
   */
  var Harshad = ( function() {
    'use strict';
  
    return {
      /**
       * Returns true when the given number is a valid Harshad number.
       *
       * @param {Number} number The given number
       * @returns {Boolean}
       * @function Harshad.isValid
       */
      isValid: function( number ) {
        let sum=[...number+''].reduce((a,c)=>a+ +c,0)
        return number%sum==0// Your implementation goes here
      },
      /**
       * Gets the next Harshad number after the given number.
       *
       * @param {Number} number The given number
       * @returns {Number}
       * @function Harshad.getNext
       */
      getNext: function( number ) {
       for(let i=number+1;;i++){
        let sum=[...i+''].reduce((a,c)=>a+ +c,0)
        if(i%sum==0) return i
       }   // Your implementation goes here
      },
      /**
       * Returns the suite of Harshad numbers, starting after a given number.
       *
       * @param {Number} count The number of elements to return
       * @param {Number} start The number after which the serie should start;
       *  defaults to 0
       * @returns {Array}
       * @function Harshad.getSerie
       */
      getSerie: function( count, start=0 ) {
        let a=[]
        let number=start+1
        while(a.length<count){
          let sum=[...number+''].reduce((a,c)=>a+ +c,0)
          if(number%sum==0) a.push(number)
          number++
          }
        return a// Your implementation goes here
      }
    };
  
  } () );
  