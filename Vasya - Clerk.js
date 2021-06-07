function tickets(peopleInLine){
    let [c25,c50,c100] = [0,0,0];
    for(let v of peopleInLine) {
      if(v===25) c25++;
      if(v===50) {c50++; c25--;}
      if(v===100) {c25--; c50>0?c50--:c25-=2;}
      if(c25<0) return 'NO'
    }
    return 'YES'
  }
  
  function Clerk(name) {
    this.name = name;
    
    this.money = {
      25 : 0,
      50 : 0,
      100: 0 
    };
    
    this.sell = function(element, index, array) {
      this.money[element]++;
  
      switch (element) {
        case 25:
          return true;
        case 50:
          this.money[25]--;
          break;
        case 100:
          this.money[50] ? this.money[50]-- : this.money[25] -= 2;
          this.money[25]--;
          break;
      }
      return this.money[25] >= 0;
    };
  }
  
  function tickets(peopleInLine){
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
  }
  
  function tickets(peopleInLine) {
    var bills = [0, 0, 0]
    for (var i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break
          
        case 50:
          bills[0]--
          bills[1]++
          break
          
        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }
      
      if (bills[0] < 0) {
        return 'NO'
      }
    }
    
    return 'YES'
  }
  
  function tickets(peopleInLine){
   
          countQuarter = 0;
          countFifty = 0;
  
          for (i of peopleInLine) {
              if (i == 25) {
                  countQuarter++;
              } else if (i == 50) {
                  countQuarter--;
  
                  if (countQuarter < 0) {
                      return "NO";
                  }
  
                  countFifty++;
              } else if (i == 100) {
                  if (countFifty == 0) {
                      countQuarter -= 3;
                  } else {
                      countQuarter--;
                      countFifty--;
                  }
                  if (countQuarter < 0 || countFifty < 0) {
                      return "NO";
                  }
              }
          }
          return "YES";
      }