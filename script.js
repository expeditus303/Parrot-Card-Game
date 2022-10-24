let cardsNumber = 0; // Variável que recebe a quantidade de cartas que o jogador quer jogar
const selectedCards = []
let cards = []
cardsTurnedCounter = 0;
let movesCounter = 0
let hitsCounter = 0

askCardsNumber()


// Perguntar quantas cartas e validar 
function askCardsNumber () {
    while (cardsNumber % 2 !== 0 || cardsNumber < 4 || cardsNumber > 14) {
        cardsNumber = prompt ('Escolha a quantidade de cartas que você quer jogar (digite um número par entre 4 e 14)')
    }

    insertGifs()
    
}

// ---------------------------------


// INSERIR GIFS DUAS VEZES E EMBARALHAR

function insertGifs() {
    for (let i = 0; (cardsNumber / 2) > i; i++) {
        selectedCards.push(i)
        selectedCards.push(i)
    }

    selectedCards.sort(sort)

    createCard()
}

// --------------------------------------



// CRIAR CARTA
function createCard() {
    const main = document.querySelector('.main')
    for (let i = 0; cardsNumber > i; i++) {
        main.innerHTML += `
        <div class="card notChosen A${selectedCards[i]}" onclick="turnCard(this)" >
            <div class="card-back cards">
                <img src="./files/${selectedCards[i]}.gif" alt="front">
            </div>
            <div class="card-front cards">
                <img src="./files/front.png" alt="gif ">
            </div>
        </div>
        `
    }
}

// -----------------------------------


// VIRAR A CARTA AO CLICADA 

function turnCard(card) { // função que faz o efeito da carta virando ao clicar e mostra através do "moves" se duas cartas foram viradas para serem desviradas
    card.classList.add('turned');
    cardsTurnedCounter++;

    if (cardsTurnedCounter == 2) {
        cards = document.querySelectorAll('.turned')
        console.log(cards)
        
        compareCards(cards)
        cardsTurnedCounter = 0;
        cards = []
        console.log(cardsTurnedCounter)
    }
} 




function sort() { 
	return Math.random() - 0.5; 
}
