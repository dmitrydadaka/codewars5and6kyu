const buyTofu = (cost, box) => {

    let monme_cnt = (box.match(/\bmonme\b/g) || []).length,
          mon_cnt = (box.match(/\bmon\b/g) || []).length,
        monme_req = Math.min(monme_cnt, cost / 60 | 0),
          mon_req = cost - monme_req * 60;
          
    return mon_req > mon_cnt
      ? 'leaving the market'
      : [ mon_cnt, monme_cnt, mon_cnt + monme_cnt * 60, mon_req + monme_req ];
    
  }
  
  function buyTofu(cost,box){
    let mon=(box.match(/\bmon\b/g)||[]).length
    let monme=(box.match(/\bmonme\b/g)||[]).length
    return mon+monme*60>=cost&&(cost>=60?cost%60<=mon:cost<=mon)?[mon,monme,mon+monme*60,monme*60>=cost?~~(cost/60)+cost%60:monme+(cost-monme*60)]:'leaving the market'
    }
  
  function buyTofu(cost, box) {
    box = box.split(' ')
    let mon = box.filter(x => x == 'mon').length
    let monme = box.filter(x => x == 'monme').length
    
    let mon2 = mon, monme2 = monme, paidCoins = 0
    // Let's try paying with monme
    while (cost >= 60 && monme2) cost -= 60, monme2--, paidCoins++
    // Then let's try paying with mon
    while (cost && mon2) cost--, mon2--, paidCoins++
    // Can't pay?
    if (cost) return 'leaving the market'
    // Can pay?
    return [mon, monme, monme * 60 + mon, paidCoins]
  }
  
  function buyTofu(cost,box){
    let mon=box.split(' ').filter(x=>x=='mon').length
    let monme=box.split(' ').filter(x=>x=='monme').length
    return mon+monme*60>=cost&&(cost>=60?cost%60<=mon:cost<=mon)?[mon,monme,mon+monme*60,monme*60>=cost?~~(cost/60)+cost%60:monme+(cost-monme*60)]:'leaving the market'
    }