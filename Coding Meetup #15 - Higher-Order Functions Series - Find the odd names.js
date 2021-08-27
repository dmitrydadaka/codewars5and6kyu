function findOddNames(list) {
    return list.filter(({firstName})=>[...firstName].reduce((a,c)=>a+c.charCodeAt(),0)&1) // thank you for checking out the Coding Meetup kata :)
   }
   
   function findOddNames(list) {
    return list.filter(({firstName})=>[...firstName].reduce((a,c)=>a+c.charCodeAt(),0)%2) // thank you for checking out the Coding Meetup kata :)
   }