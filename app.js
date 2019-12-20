const message = document.querySelector('.message');
const gameplay = document.querySelector('.gameplay');
const score = document.querySelector('.score');
const button = document.querySelectorAll('button');

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['hearts', 'diams', 'clubs', 'spades'];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', playGame);
}

function toggleButtons() {
  button[0].classList.toggle('hideButton');
  button[1].classList.toggle('hideButton');
  button[2].classList.toggle('hideButton');
}

function playGame(e) {
  console.log(e.target);
  let temp = e.target.innerText;
  let myCard = drawCard();

  console.log(temp);
  if (temp == 'Start') {
    console.log('You Clicked Start');
    message.innerHTML = 'Higher or Lower';
    gameplay.innerHTML = '';
    makeCard();
    toggleButtons();
  }
}

function drawCard() {
  if (deck.length > 0) {
    let card = '';
    return card;
  } else {
    makeDeck();
    return drawCard();
  }
}

function makeDeck() {
    deck = [];
    for (let i = 0; i < suits.length; i++) {
        for(let j = 0; j < ranks.length; j++) {
            let card = {};
            card.suit = suits[i];
            card.rank = ranks[j];
            card.value = (j+1);
            deck.push(card);
        }
    }
    console.log(deck);
}

function makeCard() {

}
