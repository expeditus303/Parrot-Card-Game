let cardsNumber;
const deck = [];
let firstCard, secondCard; //undefined
let moves = 0;
let hits = 0;
let clock = 0;
let idInterval; // variable used to stop timer using 'clearInterval'

const cards = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];



askCardsNumber();

// TIMER
function timer(){
    clock++
    const timer = document.querySelector('.timer')
    timer.innerHTML = clock;
}

// IF THE NUMBER INPUTED OF CARDS CAN'T BE USED
function invalidCardNumber() {
    if ((cardsNumber % 2) != 0 || cardsNumber < 4 || cardsNumber > 14 || isNaN(cardsNumber)) {
        return true;
    
    } else {
        return false;
    }
}


// ASK THE NUMBER OF CARDS
function askCardsNumber () {
    
    while (invalidCardNumber())  {
        cardsNumber = Number(prompt(`Let's play a memory game? Type an even number between 4 - 14`))
    }

    startGame()

    idInterval = setInterval(timer, 1000);
}


// CREATE A SHUFFLED DECK WITH THE NUMBER OF CARDS INPUTTED
function startGame() {
    for (let i = 0; i < (cardsNumber/2); i++) {
        deck.push(cards[i])
        deck.push(cards[i])
    }

    deck.sort(shuffler)

    insertCards()
}

// INSERT CARDS ON HTML
function insertCards() {
    const main = document.querySelector('.main')
    
    for (let i = 0; i < deck.length; i++) {
        let cardTemplate = `
            <li class="card" onclick="turnCard(this)">
                <div class="card-front cards">
                    <img src="./files/front.png" alt="">
                </div>

                <div class="card-back cards">
                    <img src="./files/${deck[i]}.gif" alt="">
                </div>
            </li>
        `;

        main.innerHTML += cardTemplate
    }
}

// TURN CARD
function turnCard(card) {

    if (card.classList.contains('turned')) {
        return; // here the code will halt if a card which was already turned is clicked again, so won't have the same card in firstCard and second Card
    }


    if (firstCard === undefined || secondCard === undefined) {
        card.classList.add('turned')
        moves++;

        if (firstCard === undefined) {
            firstCard = card;
        } else if (secondCard === undefined) {
            secondCard = card;

            if (firstCard.innerHTML === secondCard.innerHTML) {
                resetCards();
                hits++;

                setTimeout(endGame, 200)
            
            } else {
                setTimeout(turnBackCard, 1000);
            }
        }
    
        console.log(firstCard)
        console.log(secondCard)
    }
}

// TURNBACK CARDS AFTER X SECONDS
function turnBackCard() {
    firstCard.classList.remove('turned');
    secondCard.classList.remove('turned');
    resetCards();
}

function endGame() {
    if (hits === (deck.length / 2)) {

        clearInterval(idInterval);

        alert(`You won! You did ${moves} moves in ${clock} seconds.`)
        const playAgain = confirm(`Let's play again?`)
        if (playAgain === true) {
            window.location.reload() // reload the page like f5
        } else {
            alert(`:(`)
        }
    }

}


// MAKE CARDS UNDEFINED
function resetCards() {
    firstCard = undefined;
    secondCard = undefined;
}

// SHUFFLER
function shuffler() { 
	return Math.random() - 0.5; 
}

