// BREAK
let cardNumber = 1;
let cards = [];
const containerCard = document.querySelector('div.containerCard');



while (cardNumber % 2 !== 0 || cardNumber < 4 || cardNumber > 14) {
    cardNumber = Number(prompt("Digite o número de cartas que deseja jogar (apenas números pares de 4 a 14", 0));
}

let gifs =[] // lista com os gifs
for (let i = 0; (cardNumber / 2) > i; i++){
 gifs.push(i)
 gifs.push(i)
}
gifs.sort(comparador)

for (let index = 0; cardNumber > index; index++) {
    containerCard.innerHTML += `
    <div class="card">
        <div class="card-front"><img src="./files/${gifs[index]}.gif" alt="gif ">${index}</div>
        <div class="card-back"></div>
    </div>
    `
}



// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


// for (let c = 0; c < cardNumber; c++) {
//     cards[c].classList.remove('hidden')
// }
  