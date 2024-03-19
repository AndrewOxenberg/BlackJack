let newHandBtn = document.querySelector('.new_hand_button')
let flipCardBtn = document.querySelector('.flip_dealer_card')

let dealerTotal = document.querySelector('.dealer_total')
let playerTotal = document.querySelector('.player_total')

let shuffleText = document.querySelector('.shuffle_text')


// player cards
let playerCard1Pic = document.getElementById('playerCard1')
let playerCard2Pic = document.getElementById('playerCard2')

// dealer cards, second card is flipped over by default
let dealerCard1Pic = document.getElementById('dealerCard1')
let dealerCard2Pic = document.getElementById('dealerCard2')

// the value of the player cards to sum card values
var playerCard1Value, playerCard2Value, dealerCard1Value, dealerCard2Value

// the string representation of the player cards
var playerCard1String, playerCard2String, dealerCard1String, dealerCard2String

// this is an array of 52 suffled cards
let currentDeck = shuffleCards();


//call newHand on refresh
// newHand()


// when new hand button is clicked, 4 new cards should be dealt to the player and dealer, dealer2 card is accoutned for but
// still face down until flip card is clicked
newHandBtn.addEventListener('click', newHand)

function newHand() {

    if (currentDeck.length < 26) 
    {
        shuffleOutput();
        currentDeck = shuffleCards();
    }
    else 
    {
        playerCard1String = currentDeck.pop()
        playerCard1Value = getValueOfCard(playerCard1String)
        playerCard1Pic.src = `images/Default_Deck/${playerCard1String}.png`

        playerCard2String = currentDeck.pop()
        playerCard2Value = getValueOfCard(playerCard2String)
        playerCard2Pic.src = `images/Default_Deck/${playerCard2String}.png`

        dealerCard1String = currentDeck.pop()
        dealerCard1Value = getValueOfCard(dealerCard1String)
        dealerCard1Pic.src = `images/Default_Deck/${dealerCard1String}.png`

        dealerCard2String = currentDeck.pop()
        dealerCard2Value = getValueOfCard(dealerCard2String)
        dealerCard2Pic.src = `images/Default_Deck/back.png`

        
        playerTotal.textContent = playerCard1Value + playerCard2Value;
        dealerTotal.innerText = dealerCard1Value
    }

}

flipCardBtn.addEventListener('click', () => {
    dealerCard2Pic.src = `images/Default_Deck/${dealerCard2String}.png`
    dealerTotal.innerText = dealerCard1Value + dealerCard2Value
})






function getValueOfCard(card) {
    let value = card.split('_')[0]
    if (value === 'ace') {
        return 11
    }
    else if (value === 'king' || value === 'queen' || value === 'jack') {
        return 10
    }
    else {
        return parseInt(value)
    }
}



function shuffleCards() {
    let deck = createNewDeck()
    let shuffledDeck = []
    while (deck.length > 0) {
        let randomIndex = Math.floor(Math.random() * deck.length)
        let card = deck[randomIndex]
        shuffledDeck.push(card)
        deck.splice(randomIndex, 1)
    }
    return shuffledDeck
}

function createNewDeck() {
    // create the deck of cards
    let deck = []
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    // load cards into deck array
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(`${rank}_of_${suit}`);
        }
    }
    return deck
}

function shuffleOutput() {
    shuffleText.innerText = 'Shuffling'
    setTimeout(function () {
        shuffleText.innerText = 'Shuffling.'
    }, 500)
    setTimeout(function () {
        shuffleText.innerText = 'Shuffling..'
    }, 1000)
    setTimeout(function () {
        shuffleText.innerText = 'Shuffling...'
    }, 1500)
    setTimeout(function () {
        shuffleText.innerText = ' '
    }, 2000)
}