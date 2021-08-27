addUsername=l=>(l.forEach(x=>x.username=(x.firstName+x.lastName[0]).toLowerCase()+(new Date().getFullYear()-x.age)),l)
  

function addUsername(list) {
return list.map(x=>{x.username=(x.firstName+x.lastName[0]).toLowerCase()+(new Date().getFullYear()-x.age)
                return x})// thank you for checking out the Coding Meetup kata :)
}

function addUsername(list) {
  for(let i of list){
    i.username=i.firstName.toLowerCase()+i.lastName.toLowerCase().charAt()+(new Date().getFullYear()-i.age)// thank you for checking out the Coding Meetup kata :)
}
    return list
}

function addUsername(list) {
  for(let i=0;i<list.length;i++){
    list[i].username=list[i].firstName.toLowerCase()+list[i].lastName.toLowerCase().replace(/[^\w]/g,'')+(new Date().getFullYear()-list[i].age)// thank you for checking out the Coding Meetup kata :)
}
    return list
}