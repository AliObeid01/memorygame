const cards = document.querySelectorAll('.memory-card');
const score =document.getElementById('score');
const reset =document.getElementById('reset');

let flipped = false;
let gamelocked = false;
let card1, card2;
let match=0;

reset.addEventListener('click', restart);
cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  if (gamelocked ) return;
  if (this === card1) return;

  this.classList.add('flip');

  if (!flipped) {
    flipped = true;
    card1 = this;

    return;
  }


  card2 = this;
  check_macth_card();
}

function check_macth_card() {
    if (card1.dataset.framework === card2.dataset.framework) {
      match_card();
      score.innerHTML=`score:${match+=1}`;
      if(match==3){score.innerHTML=`Greate you have a good memory`}
      return;
    }
   
    unflipCards();
  }

function match_card() {
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
  
    resetgame();
  }
  
  