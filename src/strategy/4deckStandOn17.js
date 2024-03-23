let dbAftSplt = true;
let canDouble = true;
let canSurr = true;


//first decision per hand
export function firstDecision(card1, card2, dCard) {
    if (card1 === card2)
        return splitLogic(card1, dCard)

    else if (card1 === 11 || card2 === 11)
        if (card1 === 11)
            return softLogic(card2, dCard)
        else
            return softLogic(card1, dCard)
    else   
        return hardLogic(card1 + card2, dCard)
}

function splitLogic (pCard, dCard) {
    if (pCard === 2 || pCard === 3) {
        //2 and 3 are the same
        if ((dCard <= 3 && dbAftSplt) || (dCard >= 4 && dCard <= 7))
            return 'split'
        else 
            return 'hit'

    } else if (pCard === 4) {
        //hit on 2, 3, 4
        //split if double after split is allowed on 5, 6, otherwise hit
        //hit on 7+
        if ((dCard === 5 || dCard === 6) && dbAftSplt)
            return 'split'
        else
            return 'hit'

    } else if (pCard === 5) {
        //same as hard 10
        if (dCard <= 9 && canDouble)
            return 'double'
        else    
            return 'hit'

    } else if (pCard === 6) {
        //on a 2, split if double after split is allowed, otherwise hit
        //split from 3 to 6
        //hit from 7+
        if (dCard === 2 && dbAftSplt)
            return 'split'
        else if (dCard >= 3 && dCard <= 6)
            return 'split'
        else
            return 'hit'

    } else if (pCard === 7) {
        //split up to a seven, hit 8+
        if (dCard <= 7) 
            return 'split'
        else  
            return 'hit'
    
    } else if (pCard === 8) {
        //always split 8s
        return 'split'

    } else if (pCard === 9) {
        //checking dealer card
        if (dCard === 7 || dCard === 10 || dCard === 11)
            return 'stand';
        else   
            return 'split'
        
    } else if (pCard === 10) {
        //this is a 20
        return 'stand'

    } else if (pCard === 11) {
        //always split aces
        return 'split'

    } else 
        return 'invalid'

}

function softLogic(pCard, dCard) {
    pCard += 11
    //on 19+ stand
    if (pCard >= 19) {
        return 'stand'
    } else if (pCard === 18) {
        //if double allowed and dCard is 3-6, double
        //if dCard is <= 8 stand, otherwise hit
        if ((dCard >= 3 && dCard <= 6) && canDouble)
            return 'double'
        else if (dCard <= 8)
            return 'stand'
        else    
            return 'hit'

    } else if (pCard === 17) {
         //if double allowed and dCard is 3-6, double, otherwise hit
         if ((dCard >= 3 && dCard <= 6) && canDouble)
         return 'double'
     else
         return 'hit'
        
    } else if (pCard === 15 || pCard === 16) {
        //if double allowed and dCard is 4-6, double, otherwise hit
        if ((dCard >= 4 && dCard <= 6) && canDouble)
            return 'double'
        else
            return 'hit'
        
    } else if (pCard === 13 || pCard === 14) {
        //13 and 14 are the same
        //if double allowed and 5, 6, double, otherwise hit
        if ((dCard === 5 || dCard === 6) && canDouble)    
            return 'double'
        else    
            return 'hit'

    } else if (pCard === 12) {
        return 'split'
    }
    else
        return 'invalid'
}


function hardLogic(pTotal, dCard) {
    //stand on 17+
  if(pTotal >= 17) {
    return 'stand'
  }

  else if (pTotal === 16) { 
    //stand up to a six, surrender if allowed 9+, hit otherwise
    if (dCard <= 6) 
        return 'stand'
    else if (dCard >= 9 && canSurr)
        return 'surrender'
    else
        return 'hit'

  } else if (pTotal === 15) { 
    //stand up to a 6, surrender if allowed in 10, hit otherwise
    if (dCard <= 6) 
        return 'stand'
    else if (dCard === 10 && canSurr)
        return 'surrender'
    else
        return 'hit'

  } else if (pTotal === 14 || pTotal === 13) { 
    //13 and 14 same
    //stand up to a 6, hit otherwise
    if (dCard <= 6)
        return 'stand'
    else    
        return 'hit'
    
  } else if (pTotal === 12) { 
    //stand on 4, 5, 6, hit otherwise
    if(dCard <= 6 && dCard >= 4) 
        return 'stand'
    else
        return 'hit'
    
  } else if (pTotal === 11) { 
    //double on everything but Ace if possible, hit otherwise
    if (dCard !== 11 && canDouble)
        return 'double'
    else
        return 'hit'
    
  } else if (pTotal === 10) { 
    //double on everything but 10+ if possible, hit otherwise
    if (dCard < 10 && canDouble)
        return 'double'
    else    
        return 'hit'
    
  } else if (pTotal === 9) { 
    //double 3 through 6 if possible, hit otherwise
    if (dCard >= 3 && dCard <= 6 && canDouble)
        return 'double'
    else
        return 'hit'
    
  } else if (pTotal <= 8) { 
    return 'hit'
  }

}