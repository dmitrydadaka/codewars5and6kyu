function songDecoder(song){
    return song.replace(/(WUB)+/g, ' ').trim()
  }
  function songDecoder(song){
    return song.replace(/(WUB)/g, ' ').split(/\s+/g).join(' ').trim()
  }