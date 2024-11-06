import React, { useEffect, useState } from 'react';
import DiamondA from 'assets/cardfronts/diamonds/diamonds_A.png';
import Diamond02 from 'assets/cardfronts/diamonds/diamonds_02.png';
import Diamond03 from 'assets/cardfronts/diamonds/diamonds_03.png';
import Diamond04 from 'assets/cardfronts/diamonds/diamonds_04.png';
import Diamond05 from 'assets/cardfronts/diamonds/diamonds_05.png';
import Diamond06 from 'assets/cardfronts/diamonds/diamonds_06.png';
import Diamond07 from 'assets/cardfronts/diamonds/diamonds_07.png';
import Diamond08 from 'assets/cardfronts/diamonds/diamonds_08.png';
import Diamond09 from 'assets/cardfronts/diamonds/diamonds_09.png';
import Diamond10 from 'assets/cardfronts/diamonds/diamonds_10.png';
import DiamondJ from 'assets/cardfronts/diamonds/diamonds_J.png';
import DiamondQ from 'assets/cardfronts/diamonds/diamonds_Q.png';
import DiamondK from 'assets/cardfronts/diamonds/diamonds_K.png';

import ClubsA from 'assets/cardfronts/clubs/clubs_A.png';
import Clubs02 from 'assets/cardfronts/clubs/clubs_02.png';
import Clubs03 from 'assets/cardfronts/clubs/clubs_03.png';
import Clubs04 from 'assets/cardfronts/clubs/clubs_04.png';
import Clubs05 from 'assets/cardfronts/clubs/clubs_05.png';
import Clubs06 from 'assets/cardfronts/clubs/clubs_06.png';
import Clubs07 from 'assets/cardfronts/clubs/clubs_07.png';
import Clubs08 from 'assets/cardfronts/clubs/clubs_08.png';
import Clubs09 from 'assets/cardfronts/clubs/clubs_09.png';
import Clubs10 from 'assets/cardfronts/clubs/clubs_10.png';
import ClubsJ from 'assets/cardfronts/clubs/clubs_J.png';
import ClubsQ from 'assets/cardfronts/clubs/clubs_Q.png';
import ClubsK from 'assets/cardfronts/clubs/clubs_K.png';

import HeartsA from 'assets/cardfronts/hearts/hearts_A.png';
import Hearts02 from 'assets/cardfronts/hearts/hearts_02.png';
import Hearts03 from 'assets/cardfronts/hearts/hearts_03.png';
import Hearts04 from 'assets/cardfronts/hearts/hearts_04.png';
import Hearts05 from 'assets/cardfronts/hearts/hearts_05.png';
import Hearts06 from 'assets/cardfronts/hearts/hearts_06.png';
import Hearts07 from 'assets/cardfronts/hearts/hearts_07.png';
import Hearts08 from 'assets/cardfronts/hearts/hearts_08.png';
import Hearts09 from 'assets/cardfronts/hearts/hearts_09.png';
import Hearts10 from 'assets/cardfronts/hearts/hearts_10.png';
import HeartsJ from 'assets/cardfronts/hearts/hearts_J.png';
import HeartsQ from 'assets/cardfronts/hearts/hearts_Q.png';
import HeartsK from 'assets/cardfronts/hearts/hearts_K.png';

import SpadesA from 'assets/cardfronts/spades/spades_A.png';
import Spades02 from 'assets/cardfronts/spades/spades_02.png';
import Spades03 from 'assets/cardfronts/spades/spades_03.png';
import Spades04 from 'assets/cardfronts/spades/spades_04.png';
import Spades05 from 'assets/cardfronts/spades/spades_05.png';
import Spades06 from 'assets/cardfronts/spades/spades_06.png';
import Spades07 from 'assets/cardfronts/spades/spades_07.png';
import Spades08 from 'assets/cardfronts/spades/spades_08.png';
import Spades09 from 'assets/cardfronts/spades/spades_09.png';
import Spades10 from 'assets/cardfronts/spades/spades_10.png';
import SpadesJ from 'assets/cardfronts/spades/spades_J.png';
import SpadesQ from 'assets/cardfronts/spades/spades_Q.png';
import SpadesK from 'assets/cardfronts/spades/spades_K.png';

import './GetCard.css';

const allCards = [
  { suit: 'diamonds', image: DiamondA, alt: 'diamonds_A' },
  { suit: 'diamonds', image: Diamond02, alt: 'diamonds_02' },
  { suit: 'diamonds', image: Diamond03, alt: 'diamonds_03' },
  { suit: 'diamonds', image: Diamond04, alt: 'diamonds_04' },
  { suit: 'diamonds', image: Diamond05, alt: 'diamonds_05' },
  { suit: 'diamonds', image: Diamond06, alt: 'diamonds_06' },
  { suit: 'diamonds', image: Diamond07, alt: 'diamonds_07' },
  { suit: 'diamonds', image: Diamond08, alt: 'diamonds_08' },
  { suit: 'diamonds', image: Diamond09, alt: 'diamonds_09' },
  { suit: 'diamonds', image: Diamond10, alt: 'diamonds_10' },
  { suit: 'diamonds', image: DiamondJ, alt: 'diamonds_J' },
  { suit: 'diamonds', image: DiamondQ, alt: 'diamonds_Q' },
  { suit: 'diamonds', image: DiamondK, alt: 'diamonds_K' },

  { suit: 'clubs', image: ClubsA, alt: 'clubs_A' },
  { suit: 'clubs', image: Clubs02, alt: 'clubs_02' },
  { suit: 'clubs', image: Clubs03, alt: 'clubs_03' },
  { suit: 'clubs', image: Clubs04, alt: 'clubs_04' },
  { suit: 'clubs', image: Clubs05, alt: 'clubs_05' },
  { suit: 'clubs', image: Clubs06, alt: 'clubs_06' },
  { suit: 'clubs', image: Clubs07, alt: 'clubs_07' },
  { suit: 'clubs', image: Clubs08, alt: 'clubs_08' },
  { suit: 'clubs', image: Clubs09, alt: 'clubs_09' },
  { suit: 'clubs', image: Clubs10, alt: 'clubs_10' },
  { suit: 'clubs', image: ClubsJ, alt: 'clubs_J' },
  { suit: 'clubs', image: ClubsQ, alt: 'clubs_Q' },
  { suit: 'clubs', image: ClubsK, alt: 'clubs_K' },

  { suit: 'hearts', image: HeartsA, alt: 'hearts_A' },
  { suit: 'hearts', image: Hearts02, alt: 'hearts_02' },
  { suit: 'hearts', image: Hearts03, alt: 'hearts_03' },
  { suit: 'hearts', image: Hearts04, alt: 'hearts_04' },
  { suit: 'hearts', image: Hearts05, alt: 'hearts_05' },
  { suit: 'hearts', image: Hearts06, alt: 'hearts_06' },
  { suit: 'hearts', image: Hearts07, alt: 'hearts_07' },
  { suit: 'hearts', image: Hearts08, alt: 'hearts_08' },
  { suit: 'hearts', image: Hearts09, alt: 'hearts_09' },
  { suit: 'hearts', image: Hearts10, alt: 'hearts_10' },
  { suit: 'hearts', image: HeartsJ, alt: 'hearts_J' },
  { suit: 'hearts', image: HeartsQ, alt: 'hearts_Q' },
  { suit: 'hearts', image: HeartsK, alt: 'hearts_K' },

  { suit: 'spades', image: SpadesA, alt: 'spades_A' },
  { suit: 'spades', image: Spades02, alt: 'spades_02' },
  { suit: 'spades', image: Spades03, alt: 'spades_03' },
  { suit: 'spades', image: Spades04, alt: 'spades_04' },
  { suit: 'spades', image: Spades05, alt: 'spades_05' },
  { suit: 'spades', image: Spades06, alt: 'spades_06' },
  { suit: 'spades', image: Spades07, alt: 'spades_07' },
  { suit: 'spades', image: Spades08, alt: 'spades_08' },
  { suit: 'spades', image: Spades09, alt: 'spades_09' },
  { suit: 'spades', image: Spades10, alt: 'spades_10' },
  { suit: 'spades', image: SpadesJ, alt: 'spades_J' },
  { suit: 'spades', image: SpadesQ, alt: 'spades_Q' },
  { suit: 'spades', image: SpadesK, alt: 'spades_K' },
];

// Function to get the next card
let cardIndex = 0;

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array]; // Create a copy of the array to avoid mutating the original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const shuffledCards = shuffleArray(allCards);

export default function Deck() {
  return null;
}

function getCard() {
  if (cardIndex < shuffledCards.length) {
    const card = shuffledCards[cardIndex];
    cardIndex += 1;
    console.log(`Current card ${cardIndex}: ${card.alt}`);
    return (
      <img
        key={cardIndex}
        src={card.image}
        alt={`${card.alt}`}
        className="card-front"
      />
    );
  }
  return null; // Optional: return null if out of cards
}

export { getCard };
