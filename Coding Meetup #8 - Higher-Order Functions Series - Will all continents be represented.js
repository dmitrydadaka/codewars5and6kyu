function allContinents(list) {
    return new Set(list.map(x=>x.continent)).size==5  // thank you for checking out the Coding Meetup kata :)
    }
    
    function allContinents(list) {
      let cont=['Oceania','Africa','Asia','Europe', 'Americas']
      return cont.every(val=>list.some(e=>e.continent==val))
    }