

let arr = []

function play(obj){
    let person = document.getElementById('player')
    let clickObj = document.getElementById(obj)
    if(person.innerText === 'X'){
      person.innerText = 'O'
      clickObj.innerText = 'X'
      arr[clickObj] = 'X'
    } else {
      player.innerText = 'X'
      clickObj.innerText ='O'
      arr[clickObj] = 'O'
    }
    console.log(arr)
    
    
    const topL = arr[0];
    const topC = arr[1];
    const topR = arr[2];
    const midL = arr[3];
    const midC = arr[4];
    const midR = arr[5];
    const botL = arr[6];
    const botC = arr[7];
    const botR = arr[8];
    
    
    
    if (topL !== undefined && topL === topC && topL === topR){
      alert(`${topL} is the winner`);
      return;
    }
    if (topL !== undefined && topL === midL && topL === botL){
      alert(`${topL} is the winner`);
      return;
    }
    if (topL !== undefined && topL === midC && topL === botR){
      alert(`${topL} is the winner`);
      return;
    }
    if (topC !== undefined && topC === midC && topC === botC){
      alert(`${topC} is the winner`);
      return;
    }
    // if (topR !== undefined && topR === topC && topR === topL){
    //   alert(`${topR} is the winner`)
    //   return;
    // }
    // if (topR !== undefined && topR === midC && topR === botL){
    //   alert(`${topR} is the winner`)
    //   return;
    // }
    if (topR !== undefined && topR === midR && topR === botR){
      alert(`${topR} is the winner`);
      return;
    }
    if (midL !== undefined && midL === midC && midL === midR){
      alert(`${midL} is the winner`);
      return;
    }
    // if (midR !== undefined && midR === midC && midR === midL){
    //   alert(`${midR} is the winner`)
    //   return;
    // }
    // if (botL !== undefined  && botL === midL && botL === topL){
    //   alert(`${botL} is the winner`)
    //   return;
    // }
    if (botL !== undefined && botL === midC && botL === topR){
      alert(`${botL} is the winner`);
      return;
    }
    if (botL !== undefined && botL === botC && botL === botR){
      alert(`${botL} is the winner`);
      return;
    }
    // if (botC !== undefined && botC === midC && botC === topC){
    //   alert(`${botC} is the winner`)
    //   return;
    // }
    // if (botR !== undefined && botR === midC && botR === topL){
    //   alert(`${botR} is the winner`)
    //   return;
    // }
    // if (botR !== undefined && botR === midR && botR === topR){
    //   alert(`${botR} is the winner`)
    //   return;
    // }
    // if (botR !== undefined && botR === botC && botR === botL){
    //   alert(`${botR} is the winner`);
    //   return;
    // }

  let arrFull = true
  for(let i = 0; i <= 8; i++){
    if(arr[i] === undefined){
      arrFull = false
    }
  }
  if(arrFull === true){
    alert ("CAT's Game")
  }


}