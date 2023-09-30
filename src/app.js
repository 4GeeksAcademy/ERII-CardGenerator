/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function generateRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  return { suit: randomSuit, rank: randomRank };
}

function updateCardElement(card, cardElement) {
  cardElement.querySelector(".top-suit").textContent = card.suit;
  cardElement.querySelector(".bottom-suit").textContent = card.suit;
  cardElement.querySelector(".rank").textContent = card.rank;
}

const cardContainer = document.getElementById("cardContainer");
const generatedCard = document.getElementById("generatedCard");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", function() {
  const newCard = generateRandomCard();
  updateCardElement(newCard, generatedCard);
});
