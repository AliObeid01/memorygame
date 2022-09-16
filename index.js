const cards = document.querySelectorAll('.memory-card');
const score =document.getElementById('score');
const reset =document.getElementById('reset');

let flipped = false;
let gamelocked = false;
let card1, card2;
let match=0;