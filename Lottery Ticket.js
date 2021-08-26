function bingo(ticket, win){
    return ticket.reduce((a,[s,n])=>a+([...s].some(x=>x.charCodeAt()==n)?1:0),0)>=win?'Winner!':'Loser!'
    }
    
    function bingo(ticket, win){
    return ticket.reduce((a,c,i)=>a+([...c[0]].some(x=>x.charCodeAt()==c[1])?1:0),0)>=win?'Winner!':'Loser!'
    }